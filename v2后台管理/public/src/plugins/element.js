import Vue from "vue";
import {
  Button,
  Switch,
  Form,
  Input,
  FormItem,
  Checkbox,
  Message,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
} from "element-ui";
Vue.prototype.$message = Message;
// 注册
Vue.use(Button);
Vue.use(Switch);
Vue.use(Form);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(Checkbox);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
