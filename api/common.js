import service from '../utils/request'

export default({
    getMap () {
        return service({
            url: '',
            method: 'get'
        })
    }
})