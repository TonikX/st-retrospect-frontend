import { CHANGE_DATA_LANG, CHANGE_INTERFACE_LANG } from './actionTypes';

/**
 * Enum of mutation types for this module
 */
const mutationTypes = {
  SET_DATA_LANG: 'SET_DATA_LANG', // Set language in which data from the database will be displayed
  SET_INTERFACE_LANG: 'SET_INTERFACE_LANG' // Set language in which user interface will be displayed
};

/**
 * Module state
 * @typedef {object} AppModuleState
 * @property {string} dataLanguage - language in which data from the database will be displayed
 * @property {string} interfaceLanguage - language in which user interface will be displayed
 */

/**
 * Creates module state
 * @return {AppModuleState}
 */
function initialState() {
  return {
    dataLanguage: i18n.locale,
    interfaceLanguage: i18n.locale
  };
}

const actions = {
  /**
   * Change language in which data from the database will be displayed
   * @param {function} commit - standard vuex commit function
   * @param {String} lang - language to set
   */
  [CHANGE_DATA_LANG]({ commit }, lang) {
    commit(mutationTypes.SET_DATA_LANG, lang);
  },

  /**
   * Set another language for user interface
   * @param {function} commit - standard vuex commit function
   * @param {String} lang - language to set
   */
  [CHANGE_INTERFACE_LANG]({ commit }, lang) {
    commit(mutationTypes.SET_INTERFACE_LANG, lang);
  }
};

const mutations = {
  /**
   * Change language in which data from the database will be displayed
   * @param {AppModuleState} state - vuex module state
   * @param {String} lang - language to set
   */
  [mutationTypes.SET_DATA_LANG](state, lang) {
    state.dataLanguage = lang;
  },

  /**
   * Set language in which user interface will be displayed
   * @param {AppModuleState} state - vuex module state
   * @param {String} lang - language to set
   */
  [mutationTypes.SET_INTERFACE_LANG](state, lang) {
    state.interfaceLanguage = lang;
  }
};

export default {
  state: initialState(),
  mutations,
  actions
};
