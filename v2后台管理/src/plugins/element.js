import Vue from "vue";
import {
  Button,
  Switch,
  Form,
  Input,
  FormItem,
  Checkbox,
  Message,
} from "element-ui";
Vue.prototype.$message = Message;
// 注册
Vue.use(Button);
Vue.use(Switch);
Vue.use(Form);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(Checkbox);
