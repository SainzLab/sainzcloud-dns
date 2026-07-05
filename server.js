import express from 'express';
import axios from 'axios';
import cors from 'cors';
import { exec } from 'child_process';
import util from 'util';

const execPromise = util.promisify(exec);
const app = express();

app.use(cors());

const ADGUARD_URL = 'http://10.13.13.1:3000/control/stats';
const ADGUARD_USERNAME = '';
const ADGUARD_PASSWORD = '';

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(ADGUARD_URL, {
      auth: {
        username: ADGUARD_USERNAME,
        password: ADGUARD_PASSWORD
      },
      timeout: 5000
    });

    const data = response.data;

    let blockedPercentage = 0;
    if (data.num_dns_queries > 0) {
      blockedPercentage = ((data.num_blocked_filtering / data.num_dns_queries) * 100).toFixed(2);
    }

    const avgLatency = Math.round(data.avg_processing_time * 1000);

    const formatTopDomains = (domainsArray) => {
      if (!domainsArray) return [];
      return domainsArray.map(obj => {
        const domainName = Object.keys(obj)[0];
        const requestCount = obj[domainName];
        return { domain: domainName, count: requestCount };
      });
    };

    const uiData = {
      total_queries: data.num_dns_queries,
      blocked_percentage: Number(blockedPercentage),
      avg_latency: avgLatency,
      top_queried: formatTopDomains(data.top_queried_domains),
      top_blocked: formatTopDomains(data.top_blocked_domains),
      dns_queries: data.dns_queries
    };

    res.json(uiData);
  } catch (error) {
    console.error('Error fetching AdGuard API:', error.message);
    res.status(500).json({ error: 'Gagal mengambil data dari AdGuard' });
  }
});

app.listen(3001, '0.0.0.0', () => {
  console.log('Wrapper API Live Telemetry berjalan di http://localhost:3001/');
});