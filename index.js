/**
* Handler that will be called during the execution of a PostLogin flow.
*
* @param {Event} event - Details about the user and the context in which they are logging in.
* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
*/
exports.onExecutePostLogin = async (event, api) => {


  if (event.authorization) {

    let transaction_input = event.request.query.transaction_input
    transaction_input = JSON.parse(transaction_input)



    if (transaction_input.othentFunction === 'sendTransaction') {

      const contract_input = {
        function: transaction_input.warpData.function, 
        data: transaction_input.warpData.data, 
        }
      api.idToken.setCustomClaim(`contract_input`, contract_input)

      api.idToken.setCustomClaim(`email`, 'redacted for privacy')
      api.idToken.setCustomClaim(`email_verified`, 'redacted for privacy')
      api.idToken.setCustomClaim(`family_name`, 'redacted for privacy')
      api.idToken.setCustomClaim(`given_name`, 'redacted for privacy')
      api.idToken.setCustomClaim(`locale`, 'redacted for privacy')
      api.idToken.setCustomClaim(`name`, 'redacted for privacy')
      api.idToken.setCustomClaim(`nickname`, 'redacted for privacy')
      api.idToken.setCustomClaim(`picture`, 'redacted for privacy')
    } 



    if (transaction_input.othentFunction === 'idToken') {

      api.idToken.setCustomClaim(`email`, 'redacted for privacy')
      api.idToken.setCustomClaim(`email_verified`, 'redacted for privacy')
      api.idToken.setCustomClaim(`family_name`, 'redacted for privacy')
      api.idToken.setCustomClaim(`given_name`, 'redacted for privacy')
      api.idToken.setCustomClaim(`locale`, 'redacted for privacy')
      api.idToken.setCustomClaim(`name`, 'redacted for privacy')
      api.idToken.setCustomClaim(`nickname`, 'redacted for privacy')
      api.idToken.setCustomClaim(`picture`, 'redacted for privacy')
      
    } 





    if (transaction_input.othentFunction === 'initializeContract') {

      const contract_input = {
        function: transaction_input.warpData.function, 
        data: transaction_input.warpData.data,
        }
      api.idToken.setCustomClaim(`contract_input`, contract_input)

      api.idToken.setCustomClaim(`email`, 'redacted for privacy')
      api.idToken.setCustomClaim(`email_verified`, 'redacted for privacy')
      api.idToken.setCustomClaim(`family_name`, 'redacted for privacy')
      api.idToken.setCustomClaim(`given_name`, 'redacted for privacy')
      api.idToken.setCustomClaim(`locale`, 'redacted for privacy')
      api.idToken.setCustomClaim(`name`, 'redacted for privacy')
      api.idToken.setCustomClaim(`nickname`, 'redacted for privacy')
      api.idToken.setCustomClaim(`picture`, 'redacted for privacy')
    }





    if (transaction_input.othentFunction === 'initializeJWK') {

      const contract_input = {
        function: transaction_input.warpData.function, 
        data: transaction_input.warpData.data,
        }
      api.idToken.setCustomClaim(`contract_input`, contract_input)

      api.idToken.setCustomClaim(`email`, 'redacted for privacy')
      api.idToken.setCustomClaim(`email_verified`, 'redacted for privacy')
      api.idToken.setCustomClaim(`family_name`, 'redacted for privacy')
      api.idToken.setCustomClaim(`given_name`, 'redacted for privacy')
      api.idToken.setCustomClaim(`locale`, 'redacted for privacy')
      api.idToken.setCustomClaim(`name`, 'redacted for privacy')
      api.idToken.setCustomClaim(`nickname`, 'redacted for privacy')
      api.idToken.setCustomClaim(`picture`, 'redacted for privacy')
    }



    

  }
};


/**
* Handler that will be invoked when this action is resuming after an external redirect. If your
* onExecutePostLogin function does not perform a redirect, this function can be safely ignored.
*
* @param {Event} event - Details about the user and the context in which they are logging in.
* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
*/
// exports.onContinuePostLogin = async (event, api) => {
// };