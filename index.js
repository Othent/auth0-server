/**
* Handler that will be called during the execution of a PostLogin flow.
*
* @param {Event} event - Details about the user and the context in which they are logging in.
* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
*/
exports.onExecutePostLogin = async (event, api) => {
  // if (!event.user.email_verified) {
  //   api.access.deny(`Please verify your email before logging in.`);
  // }

  if (event.authorization) {

    let transaction_input = event.request.query.transaction_input
    transaction_input = JSON.parse(transaction_input)



    if (transaction_input.othentFunction === 'sendTransaction') {

      const contract_input = {
          function: transaction_input.warpData.function, 
          data: transaction_input.warpData.data, 
        }
      api.idToken.setCustomClaim(`contract_input`, contract_input)

      api.idToken.setCustomClaim(`contract_id`, event.user.user_metadata.contract_id)

      api.idToken.setCustomClaim(`email`, '')
      api.idToken.setCustomClaim(`email_verified`, '')
      api.idToken.setCustomClaim(`family_name`, '')
      api.idToken.setCustomClaim(`given_name`, '')
      api.idToken.setCustomClaim(`locale`, '')
      api.idToken.setCustomClaim(`name`, 'Othent User')
      api.idToken.setCustomClaim(`nickname`, '')
      api.idToken.setCustomClaim(`picture`, 'https://othent.io/user.png')

      if (transaction_input.testNet && event.user.user_metadata.test_net_contract_id) {
          api.idToken.setCustomClaim(`test_net_contract_id`, event.user.user_metadata.test_net_contract_id)
      } else if (transaction_input.testNet && !event.user.user_metadata.test_net_contract_id) {
          throw new Error('Please log in through your testNet account.')
      }

    } 



    if (transaction_input.othentFunction === 'idToken') {

      if (event.user.user_metadata.contract_id) {
        api.idToken.setCustomClaim(`contract_id`, event.user.user_metadata.contract_id)
      }

      else {
        
          const contract_input = {
            function: 'initializeContract', 
            data: null
          }
          api.idToken.setCustomClaim(`contract_input`, contract_input)

          api.idToken.setCustomClaim(`email`, '')
          api.idToken.setCustomClaim(`email_verified`, '')
          api.idToken.setCustomClaim(`family_name`, '')
          api.idToken.setCustomClaim(`given_name`, '')
          api.idToken.setCustomClaim(`locale`, '')
          api.idToken.setCustomClaim(`name`, 'Othent User')
          api.idToken.setCustomClaim(`nickname`, '')
          api.idToken.setCustomClaim(`picture`, 'https://othent.io/user.png')
        }

        if (event.user.user_metadata.test_net_contract_id) {
          api.idToken.setCustomClaim(`test_net_contract_id`, event.user.user_metadata.test_net_contract_id)
        } else if (transaction_input.testNet && !event.user.user_metadata.test_net_contract_id) {
            const contract_input = {
              function: 'initializeContract', 
              data: null
            }
            api.idToken.setCustomClaim(`contract_input`, contract_input)
        }
      } 




    if (transaction_input.othentFunction === 'uploadData') {

      const file_hash = transaction_input.file_hash
      api.idToken.setCustomClaim(`file_hash`, file_hash)

      api.idToken.setCustomClaim(`contract_id`, event.user.user_metadata.contract_id)

      api.idToken.setCustomClaim(`email`, '')
      api.idToken.setCustomClaim(`email_verified`, '')
      api.idToken.setCustomClaim(`family_name`, '')
      api.idToken.setCustomClaim(`given_name`, '')
      api.idToken.setCustomClaim(`locale`, '')
      api.idToken.setCustomClaim(`name`, 'Othent User')
      api.idToken.setCustomClaim(`nickname`, '')
      api.idToken.setCustomClaim(`picture`, 'https://othent.io/user.png')
    }




    if (transaction_input.othentFunction === 'initializeJWK') {

      const contract_input = {
        function: transaction_input.warpData.function, 
        data: transaction_input.warpData.data,
        }
      api.idToken.setCustomClaim(`contract_input`, contract_input)

      api.idToken.setCustomClaim(`contract_id`, event.user.user_metadata.contract_id)

      api.idToken.setCustomClaim(`email`, '')
      api.idToken.setCustomClaim(`email_verified`, '')
      api.idToken.setCustomClaim(`family_name`, '')
      api.idToken.setCustomClaim(`given_name`, '')
      api.idToken.setCustomClaim(`locale`, '')
      api.idToken.setCustomClaim(`name`, 'Othent User')
      api.idToken.setCustomClaim(`nickname`, '')
      api.idToken.setCustomClaim(`picture`, 'https://othent.io/user.png')
    }


    if (transaction_input.othentFunction === 'API_ID') {

      api.idToken.setCustomClaim(`API_ID`, event.user.user_metadata.API_ID)
      api.idToken.setCustomClaim(`contract_id`, event.user.user_metadata.contract_id)
    }



    if (transaction_input.othentFunction === 'deployWarpContractFromTx') {

      const srcTxId = transaction_input.srcTxId
      api.idToken.setCustomClaim(`srcTxId`, srcTxId)

      api.idToken.setCustomClaim(`contract_id`, event.user.user_metadata.contract_id)

      api.idToken.setCustomClaim(`email`, '')
      api.idToken.setCustomClaim(`email_verified`, '')
      api.idToken.setCustomClaim(`family_name`, '')
      api.idToken.setCustomClaim(`given_name`, '')
      api.idToken.setCustomClaim(`locale`, '')
      api.idToken.setCustomClaim(`name`, 'Othent User')
      api.idToken.setCustomClaim(`nickname`, '')
      api.idToken.setCustomClaim(`picture`, 'https://othent.io/user.png')
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