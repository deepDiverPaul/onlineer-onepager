const options = {
    // @ts-ignore
    scrollBehavior(to, from, savedPosition) {
        const behaviour = {
            behavior: 'smooth',
            top: 96,
            el: '#top'
        }
        if (to.hash) {
            behaviour.el = to.hash
        }
        return behaviour
    }
}
export default options