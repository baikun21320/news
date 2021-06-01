import {
  RECEIVE_USER_INFO
} from "@/store/mutations-type";

export default {
  recordUser ({commit}, userinfo) {
    commit(RECEIVE_USER_INFO, {userinfo})
  }
}
