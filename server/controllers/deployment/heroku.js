const heroku = (req, res) => {
  res.status(200).json({
    message: 'navigate through the down APIs',
    data: {
      signup: 'api/v1/heroku/users/signup',
      signin: 'api/v1/heroku/users/signin',
      get_user_to_apply_for_Loan: 'api/v1/heroku/users/apply',
      get_loan_repayment_history: '/api/v1/heroku/users/history',
      get_loan_applications: '/api/v1/heroku/users/applications',
      get_specific_loan_application: '/api/v1/heroku/users/application/:id',
      get_all_clients: '/api/v1/heroku/admin/users',
      get_specific_client: '/api/v1/heroku/admin/user/:id',
      mark_client_as_verified: '/api/v1/heroku/admin/mark',
      get_current_loan: '/api/v1/heroku/admin/current',
      get_repaid_loans: '/api/v1/heroku/admin/repaid',
    },
  });
};

export default heroku;
