const zod = require('zod')


const createtodo = zod.object({
    title : zod.string(),
    description : zod.string().min(8),
})

const updatetodo = zod.object({
    id : zod.string()
})

module.exports = {
    schema : schema,
    updatetodo : updatetodo
}