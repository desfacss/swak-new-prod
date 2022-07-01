module.exports = ({env}) => ({
    email: {
      config: {
        provider: 'strapi-provider-email-sendinblue',
        providerOptions: {
          sendinblue_api_key: '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',
          sendinblue_default_replyto: 'swakruta.app@gmail.com',
          sendinblue_default_from: 'swakruta.app@gmail.com',
          sendinblue_default_from_name: 'Swakruta Team',
        },
      },
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: 'swakruta-in',
          api_key: '512365734132185',
          api_secret: '6YIrEJUMck5ACvoeCuYDujzaiLo',
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    }
  });

