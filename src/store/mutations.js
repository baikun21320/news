import {RECEIVE_USER_INFO} from "@/store/mutations-type";

export default {
  [RECEIVE_USER_INFO] (state, {userinfo}) {
    state.userinfo = userinfo
  }
}
