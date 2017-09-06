const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');
router.post('/', function(req, res) {
    let i;
    const doc = new PDFDocument();
    const Name = req.body.name;
    const Address = req.body.address;
    const Mobile = req.body.mobile;
    const Website = req.body.website;
    const Email = req.body.email;
    const Link = req.body.link;
    const CompanyName = req.body.companyname;
    const ExprienceDesc = req.body.descriptionexperience;
    // const Education
    const ProjectName = req.body.projectname;
    const ProjectDesc = req.body.descriptionproject;
    const Skills = req.body.skill;
    const Languages = req.body.lang;

    // console.log("Narendra Kumawat" + arr.length);
    let filename = Name;
    filename = encodeURIComponent(filename) + '.pdf'; // Stripping special character
    res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');// Setting response to 'attachment' (download).
    res.setHeader('Content-type', 'application/pdf');     // If you use 'inline' here it will automatically open the PDF


    doc.fontSize(15);
    doc.fillColor('#33ccff');
    doc.font('public/fonts/timeburnerbold.ttf');
    doc.text("\nSkills\n\n" , 430 , 100);
    doc.fontSize(10);
    doc.fillColor('#000000');
    doc.font('public/fonts/timeburnernormal.ttf');
    for(i = 0; i < Skills.length ; i ++) {
        if(Skills[i] !== '') {
            doc.text(Skills[i] + "​\n\n", 430);
        }
    }
    doc.fontSize(15);
    doc.fillColor('#33ccff');
    doc.font('public/fonts/timeburnerbold.ttf');
    doc.text("\nResponsibilities\n\n" , 430 );
    doc.fontSize(10);
    doc.fillColor('#000000');
    doc.font('public/fonts/timeburnernormal.ttf');
    for(i = 0; i < Languages.length ; i ++) {
        if(Languages[i] !== '') {
            doc.text( Languages[i] + "​\n\n", 430);
        }
    }
    doc.fontSize(15);
    doc.fillColor('#33ccff');
    doc.font('public/fonts/timeburnerbold.ttf');
    doc.fontSize(10);
    doc.fillColor('#000000');
    doc.font('public/fonts/timeburnernormal.ttf');
    doc.text("\nLanguage\n\n" , 430 );
    for(i = 0; i < 3 ; i ++) {
        doc.text("Hindi , English​\n\n", 430);
    }
    doc.fontSize(18);//  font size
    doc.font('public/fonts/timeburnernormal.ttf');
    doc.fontSize(30);  //User Name
    doc.fillColor('#33ccff');
    doc.text(Name , 50 , 30);
    //user discription
    doc.fontSize(10);
    doc.fillColor('#33ccff');
    doc.text(Link + " | " + Website + " | " + Email , 50 , 65);
    //Address of user
    doc.fontSize(10);
    doc.fillColor('#000000');
    doc.text(Address + "\n" + Mobile + "\n" + Email, 433 , 35);

    //Experience
    doc.fontSize(15);
    doc.fillColor('#33ccff');
    doc.font('public/fonts/timeburnerbold.ttf');
    doc.text("Experience\n\n" , 50 , 110);
    for(i = 0; i < CompanyName.length ; i ++) {
        doc.fontSize(12);
        doc.bold = 10;
        doc.fillColor('#000000');
        doc.font('public/fonts/timeburnerbold.ttf');
        doc.text(CompanyName[i] , 50 );
        doc.fontSize(10);
        doc.font('public/fonts/timeburnernormal.ttf');
        doc.text(ExprienceDesc[i]+"\n\n" );
    }
    doc.fontSize(15);
    doc.fillColor('#33ccff');
    doc.font('public/fonts/timeburnerbold.ttf');
    doc.text("\nEducation\n\n" , 50);
    for(i = 0; i < 2 ; i ++) {
        doc.fontSize(12);
        doc.bold = 10;
        doc.fillColor('#000000');
        doc.font('public/fonts/timeburnerbold.ttf');
        doc.text("National Institute of Technology , Kurukshetra" , 50  );
        doc.fontSize(10);
        doc.font('public/fonts/timeburnernormal.ttf');
        doc.text("B.tech Computer Engineering" );
        doc.fontSize(8);
        doc.text("CGPA 9.066 \n\n" );
    }
    doc.fontSize(15);
    doc.fillColor('#33ccff');
    doc.font('public/fonts/timeburnerbold.ttf');
    doc.text("\nProjects\n\n" , 50);
    for(i = 0; i < ProjectName.length ; i ++) {
        doc.fontSize(12);
        doc.bold = 10;
        doc.fillColor('#000000');
        doc.font('public/fonts/timeburnerbold.ttf');
        doc.text(ProjectName[i] , 50 );
        doc.fontSize(8);
        doc.font('public/fonts/timeburnernormal.ttf');
        doc.text(ProjectDesc[i]+"\n\n " );
    }

    doc.pipe(res);
    doc.end();
});

module.exports = router;