import medicalModel from '../models/medicalModel.js';

export async function addRecord(req, res){
    const customerId = req.params.id;
    const {
        examination,
        management,
        diagnosis,
        description,
        photo  
    } = req.body;
    const date = new Date(Date.now()).toISOString();
    console.log({
        examination,
        management,
        diagnosis,
        description,
        photo 
    });
    await medicalModel.create({
        examination:examination,
        management:management,
        diagnosis:diagnosis,
        description:description,
        photo:[photo],
        customerId:customerId,
        date:date
    })
    .then((result)=>{ res.json({type:"Success", message:"Medical record added successfully!"}); })
    .catch((err)=>{
        console.log(err); 
        res.json({type:"Error", message:err});
    })
}

export async function getRecord(req, res){
    const id = req.params.id;
    await medicalModel.findById(id)
    .then((result)=>{res.json({type:"Success", message: result})})
    .catch((err)=>{res.json({type:"Success", message: err})})
}
