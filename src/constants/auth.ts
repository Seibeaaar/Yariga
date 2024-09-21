export const AUTH_REDIRECT_CONFIG = {
  login: {
    question: "Don't have an account yet?",
    linkTitle: 'Create an account',
    path: '/sign-up',
  },
  signUp: {
    question: 'Already have an account?',
    linkTitle: 'Login',
    path: '/',
  },
};

export const PASSWORD_REQUIREMENTS = [
  'From 6 to 16 characters',
  'At least one uppercase letter',
  'At least one lowercase letter',
  'At least one digit',
  'At least one special character',
];
