import {shallowMount} from '@vue/test-utils'
import landingPage from '@/components/LandingPage.vue'

describe('Landingpage', () => {

  let wrapper;
  beforeEach(() => {
     wrapper = shallowMount(landingPage);
  });


  it('displays Login and Signup Button', () => {
    expect(wrapper.findAll("button")).toHaveLength(2);
    let buttons = wrapper.findAll("button");
    let button_login = buttons.at(0);
    expect(button_login.text()).toBe('Login');
    expect(button_login.isVisible()).toBeTruthy();

    let button_signup = buttons.at(1);
    expect(button_signup.text()).toBe('Sign up');
    expect(button_signup.isVisible()).toBeTruthy();
  })
});
