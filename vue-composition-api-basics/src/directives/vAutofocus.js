export const vAutofocus = {
  // ovde mogu da se ubace i druge petlje(Hooks)
  mounted: (el) => {
    console.log('You are focus')
    el.focus()
  }
}