module.exports={
    mongooseToObject:(objects)=>{
        return objects.map((a)=>{
            return a.toObject();
        })
    },
    mongooToObject:(object)=>{
        return object.toObject();
    }
}