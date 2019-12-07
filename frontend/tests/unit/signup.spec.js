import {shallowMount} from '@vue/test-utils'
import landingPage from '@/components/SignUp.vue'

describe('Sign up page', () => {

  let wrapper;
  beforeEach(() => {
     wrapper = shallowMount(landingPage);
  });


  it('show input fields for email, password and confirm-button', () => {
    let input_email = wrapper.find("input.inputEmail");
    expect(input_email.exists()).toBeTruthy();
    expect(input_email.element.type).toBe("email");

    let input_password = wrapper.find("input.inputPassword");
    expect(input_password.exists()).toBeTruthy();
    expect(input_password.element.type).toBe("password");

    let button = wrapper.find("button");
    expect(button.exists()).toBeTruthy();
    expect(button.element.type).toBe("submit");
  });

  it("prevents to save a form without email", async () => {
    wrapper.find("input.inputEmail").setValue("");
    wrapper.find("input.inputPassword").setValue("secretPassword");
    wrapper.find("button").trigger("submit.prevent");
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".errorMessage").text()).toBe("Please enter an valid email-address.");
  });

  it("prevents to save a form without password", async () => {
    wrapper.find("input.inputEmail").setValue("test@test.de");
    wrapper.find("input.inputPassword").setValue("");
    wrapper.find("button").trigger("submit.prevent");
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".errorMessage").text()).toBe("Please enter an password.");
  });

  it("lets me fill out the registration form and after triggering the button, I get a positive reply", async () => {
    wrapper.find("input.inputEmail").setValue("test@test.de");
    wrapper.find("input.inputPassword").setValue("secretPassword");
    wrapper.find("button").trigger("submit.prevent");
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".message").text()).toBe("The Account is created. Please log in for configuration.");
  });
});
