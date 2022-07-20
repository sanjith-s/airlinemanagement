const express = require('express')
const app = express()

const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: '127.0.0.1',
    password: 'password',
    database: 'airlineSystem'
});

app.post('/emp', (req, res) => {
    console.log(req.body);
    const id = req.body.empid;
    const name = req.body.name;
    const designation = req.body.designation;
    const vaccination = req.body.vaccstatus;

    db.query(
        "INSERT INTO empDetails (empID, name, designation, vaccination) VALUES (?,?,?,?)",
        [id, name, designation, vaccination], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});

app.post('/addmaintenance', (req, res) => {
    console.log(req.body);

    let obj = req.body;

    db.query(
        "INSERT INTO maintRec (flightid, sanitation, service, recdate, rectime, flavail) VALUES (?,?,?,?,?,?)",
        [parseInt(obj.flno), obj.sanitationstatus, obj.servicestatus, obj.maindate, obj.maintime, obj.flightavail], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("success");
            }
        }
    );
});

app.post('/signup', (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const name = req.body.name;
    const mobno = req.body.mobno;
    const pwd = req.body.password;
    const address = req.body.password;
    const type = 'user'
    let success = false;

    db.query(
        "SELECT * FROM credentials  WHERE email=?;",
        [email], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result.length)
                if (result.length == 0) {
                    db.query("INSERT INTO credentials (email, password, name, mobno, address, type) VALUES (?,?,?,?,?,?);", [email, pwd, name, mobno, address, type], (err, result) => {
                        if (err) {
                            console.log(err)
                            res.send("102")
                        } else {
                            res.send("success")
                        }
                    })
                } else {
                    res.send("101");
                }
            }
        }
    );

});

app.post('/login', (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const pwd = req.body.pwd;

    db.query(
        "SELECT * FROM credentials  WHERE email=?;",
        [email], (err, result) => {
            if (err) {
                console.log(err);
                res.send("error")
            } else {
                console.log(result.length)
                if (result.length == 1) {
                    console.log(result)
                    if (result[0].email === email && result[0].password === pwd) {
                        res.send(result)

                    } else {
                        res.send("invalid")
                    }
                }
            }
        }
    );

});


let crgobj = {};
app.post('/cargobook', (req, res) => {
    console.log(req.body);
    Object.assign(crgobj, req.body);
    res.send("success")
});

app.post('/getcargoid', (req, res) => {
    db.query(
        "select * from cargoDetails ORDER BY refno DESC LIMIT 1;", (err, result) => {
            if (err) {
                console.log(err);
                res.send("error")
            } else {
                let refid = result[0].refno;
                res.send(refid.toString());
            }
        }
    );
});


app.post('/addroute', (req, res) => {
    console.log(req.body);
    let obj = req.body;
    db.query(
        "INSERT INTO route (id, dept, arr, stops, distance) VALUES (?,?,?,?,?)",
        [obj.routeid, obj.deplocation, obj.arrlocation, obj.totstops, obj.distance], (err, result) => {
            if (err) {
                console.log(err);
                res, send("error")
            } else {
                res.send("success");
            }
        }
    );
});

let codobj = {}
app.post('/getcoordinates', (req, res) => {

    db.query(
        "SELECT lat, longi FROM coordinates WHERE location=?;",
        [crgobj.scity], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                
                codobj.lat1 = result[0].lat;
                codobj.long1 = result[0].longi;
            }
        }
    );

    db.query(
        "SELECT lat, longi FROM coordinates WHERE location=?;",
        [crgobj.dcity], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                codobj.lat2 = result[0].lat;
                codobj.long2 = result[0].longi;
                res.send(codobj);
            }
        }
    );

});

app.post('/cargosave', (req, res) => {
    //console.log(req.body);
    if (req.body.status) {
        db.query(
            "INSERT INTO cargoSrc (sname, addrl1, addrl2, addrl3, src, szip, email) VALUES (?,?,?,?,?,?,?);",
            [crgobj.sname, crgobj.saddline1, crgobj.saddline2, crgobj.saddline3, crgobj.scity, crgobj.szipcode, crgobj.semail], (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Values Inserted");
                }
            }
        );


        db.query(
            "INSERT INTO cargoDest (dname, addrl1, addrl2, addrl3, dest, dzip, email) VALUES (?,?,?,?,?,?,?);",
            [crgobj.dname, crgobj.daddline1, crgobj.daddline2, crgobj.daddline3, crgobj.dcity, crgobj.dzipcode, crgobj.demail], (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Values Inserted");
                }
            }
        );

        db.query(
            "INSERT INTO cargoDetails (type, weight, dimension, fragile, electronic, perishable, userid, govtID, idName, status) VALUES (?,?,?,?,?,?,?,?,?,?);",
            [crgobj.consignmenttype, crgobj.weight, crgobj.dimensions, crgobj.fragile, crgobj.electronic, crgobj.perishable, crgobj.uid, crgobj.govtID, crgobj.idName, "booked"], (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Values Inserted");
                }
            }
        );

        res.send("success")
    }
});





app.post('/addflight', (req, res) => {
    //console.log(req.body);
    let id = parseInt(req.body.flno);
    let seats = parseInt(req.body.totseats);
    db.query(
        "INSERT INTO flight VALUES (?,?,?,?,?,?,?,?,?);",
        [id, req.body.flcompany, req.body.deptime, req.body.arrtime, seats, parseFloat(req.body.duration), req.body.fltype, parseInt(req.body.routeid), parseFloat(req.body.fare)], (err, result) => {
            if (err) {
                console.log(err);
                res.send("error")
            } else {

                //console.log(result)

                //res.send(result)
            }

        }
    );

    for (let i = 1; i <= seats; i++) {
        db.query(
            "INSERT INTO seats (flightid, seatid, status) VALUES (?,?,?);",
            [id, i, 'YES'], (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    //console.log(`Seat ${i} Inserted`);
                }
            }
        );
    }

    res.send("success")



});

let bookobj = {};
let routeid = 0;
app.post('/bookform', (req, res) => {
    //console.log(req.body);
    Object.assign(bookobj, req.body);
    db.query(
        "SELECT * FROM route  WHERE dept=? AND arr=?;",
        [bookobj.from, bookobj.to], (err, result) => {
            if (err) {
                console.log(err);
                res.send("error")
            } else {
                //console.log(result.length)
                console.log(result[0].id)
                if (result.length < 1) {
                    res.send('route not found')
                } else {
                    routeid = result[0].id;
                    console.log(routeid)
                    res.send("success")
                }
            }
        }
    );
});



app.post('/searchflight', (req, res) => {
    //console.log(routeid);
    db.query(
        "SELECT * FROM flight WHERE routeid=? AND type=? ORDER BY fare ASC, duration ASC ;", [routeid, "travel"],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                if (result.length<1) {
                    res.send("no flights")
                } else {
                    res.send(result);
                }
            }
        }
    );
});

let flightno;
app.post('/searchseat', (req, res) => {
    //console.log(req.body);
    flightno = parseInt(req.body.id);
    res.send('success')
});


app.post('/seats', (req, res) => {
    db.query(
        "SELECT * FROM seats WHERE flightid=?;",
        [flightno], (err, result) => {
            if (err) {
                console.log(err);
                res.send("error")
            } else {

                //console.log(result)

                res.send(result)
            }

        }
    );

});

let blockseats=[];
app.post('/storeseats', (req, res) => {
    console.log(req.body)
    blockseats = [...req.body.seats];
    console.log(blockseats)
    res.send("success")
});

let traveluser={}
app.post('/traveluser', (req, res) => {
    //console.log(req.body)
    Object.assign(traveluser, req.body)
    console.log(traveluser)
    res.send("success")
});

let billdetails = {};
app.post('/getbilldetails', (req, res) => {

    billdetails.uname = traveluser.passportname;
    billdetails.email = traveluser.email;
    billdetails.mobno = traveluser.mobno;
    billdetails.from = bookobj.from;
    billdetails.to = bookobj.to;
    billdetails.depdate = bookobj.depdate;
    bookobj.arrdate=bookobj.depdate;
    billdetails.arrdate = bookobj.arrdate;
    db.query(
        "SELECT * FROM flight WHERE id=?;",
        [flightno], (err, result) => {
            if (err) {
                console.log(err);
                //res.send("error")
            } else {
                billdetails.deptime = result[0].departure;
                billdetails.arrtime = result[0].arrival;
                billdetails.fare = result[0].fare;
                billdetails.operator = result[0].operator
                //console.log(result)
                res.send(billdetails)
            }

        }
    );
    //console.log(req.body)

});

//Confirm Tickets
let currefno;
app.post('/bookticket', (req, res) => {

    console.log("Hello")
    console.log(traveluser);
    //console.log(req.body);
    if (req.body.status) {
        db.query(
            "INSERT INTO travelDetails (uid, adate, ddate, flightno, adults, children, infant, passportnum, passportexp, name, email, mobno, payment, foodpref, status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?);",
            [parseInt(req.body.uid), bookobj.arrdate, bookobj.depdate, flightno, parseInt(bookobj.adults), parseInt(bookobj.children), parseInt(bookobj.infants), traveluser.passportno, traveluser.passportexpdate, traveluser.passportname, traveluser.email, traveluser.mobno, parseFloat(req.body.total), traveluser.foodpref, "Booked"], (err, result) => {
                if (err) {
                    console.log(err);

                    res.send("error")
                } else {

                    //console.log(result)

                    //res.send(result)
                }

            }
        );
        
        db.query(
            "SELECT * from travelDetails ORDER BY refno DESC LIMIT 1;", (err, result) => {
                if (err) {
                    console.log(err);
                    res.send("error")
                } else {
                    currefno = result[0].refno;
                    for(let i=0; i<blockseats.length; ++i) {
                        db.query(
                            "UPDATE seats SET status=?, refno=? WHERE seatid=? AND flightid=?;",
                            ['NO', currefno, parseInt(blockseats[i]), flightno], (err, result) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    console.log(`Seat Updated`);
                                }
                            }
                        );
                    }
                    res.send("success")
                }
            }
        );

        
    }


});
app.post('/gettravelid', (req, res) => {
    db.query(
        "select * from travelDetails ORDER BY refno DESC LIMIT 1;", (err, result) => {
            if (err) {
                console.log(err);
                res.send("error")
            } else {
                let refid = result[0].refno;
                res.send(refid.toString());
            }
        }
    );
});


//Modify Employees
let foundemp;
app.post('/findemp', (req, res) => {
    //console.log(routeid);
    //console.log(req.body)
    db.query(
        "SELECT * FROM empDetails WHERE empID=?;", [req.body.empid],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                if (result.length < 1) {
                    res.send("notfound")
                } else {
                    foundemp = [...result];
                    res.send('success')
                }
            }
        }
    );
});

app.post('/getemp', (req, res) => {
    //console.log(routeid);
    //console.log(foundemp);
    res.send(foundemp[0]);
});

app.post('/setemp', (req, res) => {
    console.log(req.body);
    db.query(
        "UPDATE empDetails SET name=?, designation=?, vaccination=? WHERE empID=?;", [req.body.empname, req.body.designation, req.body.vaccstatus, foundemp[0].empID],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('update success')
                res.send('success')
            }
        }
    );
});

//Modify Flight

let foundflight;
app.post('/findflight', (req, res) => {
    //console.log(routeid);
    //console.log(req.body)
    db.query(
        "SELECT * FROM flight WHERE id=?;", [parseInt(req.body.flno)],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                if (result.length < 1) {
                    res.send("notfound")
                } else {
                    foundflight = [...result];
                    res.send('success')
                }
            }
        }
    );
});

app.post('/getflight', (req, res) => {
    //console.log(routeid);
    //console.log(foundemp);
    res.send(foundflight[0]);
});

app.post('/setflight', (req, res) => {
    //console.log(req.body);
    db.query(
        "UPDATE flight SET operator=?, departure=?, arrival=?, duration=?, seats=?, type=?, fare=?, routeid=? WHERE id=?;", [req.body.operator, req.body.deptime, req.body.arrtime, parseFloat(req.body.duration), parseInt(req.body.seats), req.body.type, parseInt(req.body.routeid), parseInt(req.body.fare), foundflight[0].id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('flight update success')
                //res.send('success')
            }
        }
    );

    let seats = 0;
    if (req.body.type == 'cargo') {
        seats = 0
    } else {
        seats = parseInt(req.body.seats)
    }

    if (foundflight[0].seats != seats) {
        db.query(
            "DELETE FROM seats WHERE flightid=?;", [foundflight[0].id],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('delete seat success')
                    //res.send('success')
                }
            }
        );

        for (let i = 1; i <= seats; i++) {
            db.query(
                "INSERT INTO seats (flightid, seatid, status) VALUES (?,?,?);",
                [foundflight[0].id, i, 'YES'], (err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        //console.log(`Seat ${i} Inserted`);
                    }
                }
            );
        }


    }
    res.send("success")
});


//Modify Route

let foundroute;
app.post('/findroute', (req, res) => {
    //console.log(routeid);
    //console.log(req.body)
    db.query(
        "SELECT * FROM route WHERE id=?;", [parseInt(req.body.routeid)],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                if (result.length < 1) {
                    //res.send("notfound")
                } else {
                    foundroute = [...result];
                    res.send('success')
                }
            }
        }
    );
});

app.post('/getroute', (req, res) => {
    //console.log(routeid);
    //console.log(foundemp);
    res.send(foundroute[0]);
});

app.post('/setroute', (req, res) => {
    //console.log(req.body);
    db.query(
        "UPDATE route SET dept=?, arr=?, stops=?, distance=? WHERE id=?;", [req.body.dept, req.body.arr, parseInt(req.body.stops), parseInt(req.body.distance), foundroute[0].id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('update route success');
                res.send('success');
            }
        }
    );
});


//Modify Maintenance

let foundmaint;
app.post('/findmaint', (req, res) => {
    //console.log(routeid);
    //console.log(req.body)
    db.query(
        "SELECT * FROM maintRec WHERE id=?;", [parseInt(req.body.id)],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                if (result.length < 1) {
                    //res.send("notfound")
                } else {
                    foundmaint = [...result];
                    res.send('success')
                }
            }
        }
    );
});

app.post('/getmaint', (req, res) => {
    //console.log(routeid);
    //console.log(foundemp);
    res.send(foundmaint[0]);
});

app.post('/setmaint', (req, res) => {
    //console.log(req.body);
    db.query(
        "UPDATE maintRec SET sanitation=?, service=?, recdate=?, rectime=?, flavail=? WHERE id=?;", [req.body.sanitation, req.body.serivce, req.body.recdate, req.body.rectime, req.body.flavail, foundmaint[0].id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('update record success');
                res.send('success');
            }
        }
    );
});

//Delete employee

app.post('/delemp', (req, res) => {
    //console.log(routeid);
    //console.log(req.body)
    db.query(
        "DELETE FROM empDetails WHERE empID=?;", [parseInt(req.body.empID)],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send('success')
            }
        }
    );
});

//Delete Flight

app.post('/delflight', (req, res) => {
    //console.log(routeid);
    //console.log(req.body)
    db.query(
        "DELETE FROM flight WHERE id=?;", [parseInt(req.body.id)],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send('success')
            }
        }
    );
});

//Delete maintenance record

app.post('/delmaint', (req, res) => {
    //console.log(routeid);
    //console.log(req.body)
    db.query(
        "DELETE FROM maintRec WHERE id=?;", [parseInt(req.body.id)],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send('success')
            }
        }
    );
});

// Delete Route id

app.post('/delroute', (req, res) => {
    //console.log(routeid);
    //console.log(req.body)
    db.query(
        "DELETE FROM route WHERE id=?;", [parseInt(req.body.id)],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send('success')
            }
        }
    );
});

// Update cargo status

app.post('/setCargostatus', (req, res) => {
    //console.log(routeid);
    //console.log(req.body)
    db.query(
        "UPDATE cargoDetails SET status=? WHERE refno=?;", [req.body.status, parseInt(req.body.refno)],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send('success')
            }
        }
    );
});

//View cargo status
let cargostatus = {};

app.post('/setcargorefno', (req, res) => {
    //console.log(routeid);
    console.log(req.body)
    db.query(
        "SELECT refno,status FROM cargoDetails WHERE refno=?;", [req.body.refno],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
            
                if (result.length < 1) {
                    res.send("not found")
                } else {
                    cargostatus = result[0];
                    
                    res.send("success");

                }
            }
        }
    );
});

app.post('/getcargostatus', (req, res) => {
    //console.log(routeid);
    //console.log(req.body)
    //console.log(cargostatus);
    res.send(cargostatus);
});

//Cargo history
app.post('/getcargohistory', (req, res) => {

    db.query(
        "SELECT cargoDetails.refno, sname, src, szip, dname, dest, dzip, weight, type, dimension, status FROM cargoDetails, cargoSrc, cargoDest WHERE userid=? AND cargoSrc.refno=cargoDest.refno AND cargoSrc.refno=cargoDetails.refno", [req.body.uid],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                if (result.length < 1) {
                    res.send("empty")
                } else {
                    res.send(result);
                    console.log(result);
                }
            }
        }
    );

});

//Travel history
app.post('/gettravelhistory', (req, res) => {

    db.query(
        "SELECT refno, adate, ddate, payment, flightno, dept, arr, operator, T.status FROM travelDetails T, flight F, route R WHERE flightno=F.id AND routeid=R.id AND uid=?;", [req.body.uid],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                if (result.length < 1) {
                    res.send("empty")
                } else {
                    //console.log(result)
                    res.send(result);

                }
            }
        }
    );

});

//View Travel status
let travelstatus = {};

app.post('/settravelrefno', (req, res) => {
    //console.log(routeid);
    //console.log(req.body)
    db.query(
        "SELECT refno,status FROM travelDetails WHERE refno=?;", [req.body.refno],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                if (result.length < 1) {
                    res.send("not found")
                } else {
                    travelstatus = result[0];
                    res.send("success");

                }
            }
        }
    );
});

app.post('/gettravelstatus', (req, res) => {
    //console.log(routeid);
    //console.log(req.body)
    res.send(travelstatus);
});

app.post('/setTicketstatus', (req, res) => {
    //console.log(routeid);
    //console.log(req.body)
    db.query(
        "UPDATE travelDetails SET status=? WHERE refno=?;", [req.body.status, parseInt(req.body.refno)],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send('success')
            }
        }
    );
});

app.post('/getprofile', (req, res) => {
    //console.log(routeid);
    //console.log(req.body)
    db.query(
        "SELECT * FROM credentials WHERE uid=?;", [parseInt(req.body.uid)],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                //console.log(result)
                res.send(result[0])
            }
        }
    );
});


//Set report

app.post('/setreport', (req, res) => {
    //console.log(routeid);
    //console.log(req.body)
    db.query(
        "INSERT INTO report (uid,complaint) VALUES(?,?);", [parseInt(req.body.uid), req.body.complaint],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                if (result.length < 1) {
                    res.send("not found")
                } else {
                    //travelstatus = result[0];

                    db.query(
                        "SELECT * from report ORDER BY refno DESC LIMIT 1;", (err, result) => {
                            if (err) {
                                console.log(err);
                                res.send("error")
                            } else {
                                let reportrefno = result[0].refno.toString();
                                console.log(reportrefno)
                                res.send(reportrefno)
                            }
                        }
                    );

                }
            }
        }
    );
});

app.listen(3001, () => {
    console.log('Server is up and running!!!')
})