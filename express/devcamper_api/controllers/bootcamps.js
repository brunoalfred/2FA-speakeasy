// @description  Get All Bootcamps
//  @route       GET /api/v1/bootcamps
//  @access      Public

exports.getBootcamps = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: 'Show all the Bootcamps' });
}



// @description  Get Single Bootcamps
//  @route       GET /api/v1/bootcamps/:id
//  @access      Public

exports.getBootcamp = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: `Get  bootcamp ${req.params.id}` });
}



// @description    Creating a new Bootcamp
//  @route         POST /api/v1/bootcamps
//  @access        Private

exports.createBootcamp = () => {
    res
        .status(200)
        .json({ success: true, msg: 'Create a new Bootcamps ' });
}


//  @description    Update the Bootcamp
//  @route          PUT   /api/v1/bootcamps
//  @access         Private

exports.updateBootcamp = (req, res, next) =>{
    res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
}


//  @description    Delete a Bootcamp
//  @route          DELETE   /api/v1/bootcamp
//  @access         Private

exports.deleteBootcamp 