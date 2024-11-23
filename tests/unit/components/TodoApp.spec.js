/* eslint-disable no-undef */
import { mount, shallowMount } from '@vue/test-utils'
import TodoApp from '../../../src/components/TodoApp.vue'

describe('TodoApp.vue', () => {
  test('Se muestra la descripción de la tarea', () => {
    const wrapper = mount(TodoApp) // Cambiado a mount para pruebas más completas
    const todo = wrapper.get('[data-test="tarea"]') // Asegúrate de que el selector es correcto

    expect(todo.text()).toBe('Description toDo 1') // Verifica el texto
  })

  test('Deberá agregar una nueva tarea', async () => {
    const wrapper = shallowMount(TodoApp)
    expect(wrapper.findAll('[data-test="tarea"]')).toHaveLength(1)
    await wrapper.get('[data-test="nueva-tarea"]').setValue('Nueva tarea')
    await wrapper.get('[data-test="form"]').trigger('submit')
    expect(wrapper.findAll('[data-test="tarea"]')).toHaveLength(2)
  })

  test('Se deberá marcar como tarea completada', async () => {
    const wrapper = shallowMount(TodoApp)
    await wrapper.get('[data-test="checkbox"]').setValue(true)
    expect(wrapper.get('[data-test="tarea"]').classes()).toContain('completed')
  })
})
