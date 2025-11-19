export default ({ env }) => ({
  upload: {
    config:
      env('UPLOAD_PROVIDER', 'local') === 'gcs'
        ? {
            provider: 'strapi-provider-upload-google-cloud-storage',
            providerOptions: {
              bucketName: env('GCS_BUCKET_NAME'),
              basePath: env('GCS_BASE_PATH', ''),
              publicFiles: env.bool('GCS_PUBLIC_FILES', true),
              uniform: env.bool('GCS_UNIFORM', true),
            },
          }
        : {},
  },
});
