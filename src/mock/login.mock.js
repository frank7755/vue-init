import Mock from 'mockjs';
var Random = Mock.Random
Random.cfirst('@cfirst')
Random.clast('@clast')
const data = Mock.mock({
    'list|10': [{
        'id|+1': 1,
        'email': '@email',
        'name': '@cfirst@clast'
    }]
})
export default [
    {
        url: "/api/login",
        method: "get",
        response: () => {
            return {
                code: 0,
                message: "ok",
                data: data,
            }
        }
    }
]