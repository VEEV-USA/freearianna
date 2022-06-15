const config = {
  auth: "mSgwWQQDuT8iBd3RgrrTligR2SsctOSxaDkq5FpN9p3RQUKz80EuqUFlznKfpwRs",
  base_url:
    window.location.hostname === "localhost!!"
      ? "http://localhost:8787"
      : "https://mongo-realm-worker.arianna-api.workers.dev",
};

export default config;
