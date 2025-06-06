// run.js
const { exec } = require("child_process");

// Start your main Node.js app using PM2
exec("pm2 start index.js --name patriotic-panel", (err, stdout, stderr) => {
  if (err) {
    console.error(`❌ Error starting app: ${err.message}`);
    return;
  }
  if (stderr) {
    console.error(`⚠️ Stderr: ${stderr}`);
  }
  console.log(`✅ PM2 started:\n${stdout}`);
});
