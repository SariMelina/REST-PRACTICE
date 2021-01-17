function postStudent (body){
    let isOk = false
    let ok = validate(body)
    if(ok){
        isOk = true
    }
    return isOk
}

function validate(body){
    let ok = false
    if(body && typeof body === 'object' && Object.keys(body).length > 0){
        if(body.hasOwnProperty('name') && body.name !== '' && body.name.length > 3){
            if(body.hasOwnProperty('phone') && body.phone !== '' && body.phone.length === 10){
                if(body.hasOwnProperty('gender') && body.gender !== '' && body.gender.length === 1 && (body.gender === 'F' || body.gender === 'M')){
                    ok = true
                }
            }
        }

    }
    return ok
}

module.exports = {
    postStudent
}