import { C8o, C8oSettings, C8oLogLevel } from 'c8osdkvuejs'

export const getNews = ({commit}) => {
  // Define settings like endpoint url , and logs settings
  const settings = new C8oSettings().setEndPoint('http://trial.convertigo.net/cems/projects/Demo_ReadFeeds')
    .setLogRemote(true)
    .setLogC8o(true)
    .setLogLevelLocal(C8oLogLevel.DEBUG)

  // Declare new C8o Object
  const c8o = new C8o()

  // Init C8o
  c8o.init(settings)

  // Finalize init
  c8o.finalizeInit().then(() => {

    // Call a sequence
    c8o.callJson('.getandfilterFeeds')
      // Then handle response
      .then((response) => {
        // Commit response
        commit('PUSH_DATA', response['News']['Item'])
      })
      .fail((err) => {
        // In case of fail log error
        console.log(err);
      })
  })
}
