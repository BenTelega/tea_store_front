export const state = () => ({
  content: '',
  variant: '',
  title: '',
  visible: false,
})

export const mutations = {
  showMessage(state, payload) {
    state.content = payload.content
    state.variant = payload.variant
    state.title = payload.title
    state.visible = true
  },
  hideMessage(state) {
    state.visible = false
    state.content = ''
    state.title = ''
    state.variant = ''
  },
}
