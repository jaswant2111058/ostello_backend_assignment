import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT || 5000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const os = require('os');
  const getLocalIPv4Address = () => {
    const ifaces = os.networkInterfaces();

    for (const iface in ifaces) {
      for (const details of ifaces[iface]) {
        if (details.family === 'IPv4' && !details.internal) {
          return details.address;
        }
      }
    }
  };
  const server = await  app.listen(port)
  const host = getLocalIPv4Address();
  console.log(`Server is running at http://${host}:${server.address().port}`);
}
bootstrap();
