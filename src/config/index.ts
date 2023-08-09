// Default to dev if not set
const config = process.env;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  REACT_APP_API_PATH: config.REACT_APP_API_PATH,
  REACT_APP_GOOGLE_MAPS_API_KEY: config.REACT_APP_GOOGLE_MAPS_API_KEY,
  ...config,
};
