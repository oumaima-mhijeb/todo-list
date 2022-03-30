import Vuex from 'vuex'
import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Todo from '@/components/Todo'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Todos componenet unit tests', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      deleteOneTodo: jest.fn(),
    },
    
    store = new Vuex.Store({
      actions
    })
  })

  test('is a vue instance', () => {
    const wrapper = mount(Todo, {
      propsData: { 
        todo:{
          title: "test todo",
          completed: false
        }

       }
    });
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  test('renders todo title', () => {
    const todoTitle= "test todo"
    const wrapper = mount(Todo, {
      propsData: { 
        todo:{
          title: todoTitle,
          completed: false
        }

       }
    });
    expect(wrapper.html()).toContain(todoTitle);
  });
  test('calls store action "deleteOneTodo" when button is clicked', () => {
    const wrapper = shallowMount(Todo,  { store, localVue,  propsData: {  todo: {title: "todo title test",  completed: false} } });
    wrapper.find('#deleteBtn').trigger('click')
    expect(actions.deleteOneTodo).toHaveBeenCalled();
  });

























  // it('calls the toggleVisibility method when the icon is clicked', () => {
  //   const wrapper = mount(Todo, { store, localVue })
  //   wrapper.setMethods({ deleteOneTodo:jest.fn() })

  //   wrapper
  //     .find('#delete')
  //     .trigger('click')

  //   expect(wrapper.vm.deleteOneTodo).toHaveBeenCalledTimes(1)
  // })


  // it('calls store action "actionClick" when button is clicked', () => {
  //   const wrapper = shallowMount(Todo, { store, localVue })
  //   wrapper.find('#deleteBtn').trigger('click')
  //   expect(actions.deleteOneTodo).toHaveBeenCalled()
  // })



})
