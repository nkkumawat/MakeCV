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
    const InstituteName = req.body.institutename;
    const EducationDetails = req.body.edudesc;
    // const Education
    const ProjectName = req.body.projectname;
    const ProjectDesc = req.body.descriptionproject;
    const Skills = req.body.skill;
    const Languages = req.body.lang;
    const Respo = req.body.resp;

    var fs = require('fs');
    var stream = fs.createWriteStream("public/texts/"+Name +".txt");
    stream.once('open', function(fd) {
        stream.write(Name +"\n");
        stream.write(Website +"\n");
        stream.write(Mobile +"\n");
        stream.write(Email +"\n");
        stream.write(Address +"\n");
        stream.end();
    });


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
    if(Array.isArray(Skills)) {
        for (i = 0; i < Skills.length; i++) {
            if (Skills[i] !== '') {
                doc.text(Skills[i] + "​\n\n", 430);
            }
        }
    }else {
        doc.text(Skills + "​\n\n", 430);
    }
    doc.fontSize(15);
    doc.fillColor('#33ccff');
    doc.font('public/fonts/timeburnerbold.ttf');
    doc.text("\nResponsibilities\n\n" , 430 );
    doc.fontSize(10);
    doc.fillColor('#000000');
    doc.font('public/fonts/timeburnernormal.ttf');
    if(Array.isArray(Respo)) {
        for (i = 0; i < Respo.length; i++) {
            if (Respo[i] !== '') {
                doc.text(Respo[i] + "​\n\n", 430);
            }
        }
    }else {
        doc.text(Respo + "​\n\n", 430);
    }
    doc.fontSize(15);
    doc.fillColor('#33ccff');
    doc.font('public/fonts/timeburnerbold.ttf');
    doc.text("\nLanguage\n\n" , 430 );
    doc.fontSize(10);
    doc.fillColor('#000000');
    doc.font('public/fonts/timeburnernormal.ttf');
    if(Array.isArray(Languages)) {
        for (i = 0; i < Languages.length; i++) {
            if (Languages[i] !== '') {
                doc.text(Languages[i] + "​\n\n", 430);
            }
        }
    }else {
        doc.text(Languages + "​\n\n", 430);
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
    console.log(Address);
    doc.fontSize(8);
    doc.fillColor('#000000');
    doc.text(Address + "\n" + Mobile + "\n" + Email, 433 , 35);

    //Experience
    doc.fontSize(15);
    doc.fillColor('#33ccff');
    doc.font('public/fonts/timeburnerbold.ttf');
    doc.text("Experience\n\n" , 50 , 110);
    if(Array.isArray(CompanyName)) {
        for (i = 0; i < CompanyName.length; i++) {
            doc.fontSize(12);
            doc.bold = 10;
            doc.fillColor('#000000');
            doc.font('public/fonts/timeburnerbold.ttf');
            doc.text(CompanyName[i], 50);
            doc.fontSize(10);
            doc.font('public/fonts/timeburnernormal.ttf');
            doc.text(ExprienceDesc[i] + "\n\n");
        }
    }else {
        doc.fontSize(12);
        doc.bold = 10;
        doc.fillColor('#000000');
        doc.font('public/fonts/timeburnerbold.ttf');
        doc.text(CompanyName, 50);
        doc.fontSize(10);
        doc.font('public/fonts/timeburnernormal.ttf');
        doc.text(ExprienceDesc + "\n\n");
    }
    doc.fontSize(15);
    doc.fillColor('#33ccff');
    doc.font('public/fonts/timeburnerbold.ttf');
    doc.text("\nEducation\n\n" , 50);

    if(Array.isArray(InstituteName)) {
        for (i = 0; i < InstituteName.length; i++) {
            doc.fontSize(12);
            doc.bold = 10;
            doc.fillColor('#000000');
            doc.font('public/fonts/timeburnerbold.ttf');
            doc.text(InstituteName[i], 50);
            doc.fontSize(10);
            doc.font('public/fonts/timeburnernormal.ttf');
            doc.text(EducationDetails[i] + "\n\n");
        }
    }else {
        doc.fontSize(12);
        doc.bold = 10;
        doc.fillColor('#000000');
        doc.font('public/fonts/timeburnerbold.ttf');
        doc.text(InstituteName, 50);
        doc.fontSize(10);
        doc.font('public/fonts/timeburnernormal.ttf');
        doc.text(EducationDetails + "\n\n");
    }
    doc.fontSize(15);
    doc.fillColor('#33ccff');
    doc.font('public/fonts/timeburnerbold.ttf');
    doc.text("\nProjects\n\n" , 50);
    if(Array.isArray(ProjectName)) {
        for (i = 0; i < ProjectName.length; i++) {
            doc.fontSize(12);
            doc.bold = 10;
            doc.fillColor('#000000');
            doc.font('public/fonts/timeburnerbold.ttf');
            doc.text(ProjectName[i], 50);
            doc.fontSize(8);
            doc.font('public/fonts/timeburnernormal.ttf');
            doc.text(ProjectDesc[i] + "\n\n ");
        }
    }else {
        doc.fontSize(12);
        doc.bold = 10;
        doc.fillColor('#000000');
        doc.font('public/fonts/timeburnerbold.ttf');
        doc.text(ProjectName, 50);
        doc.fontSize(8);
        doc.font('public/fonts/timeburnernormal.ttf');
        doc.text(ProjectDesc + "\n\n ");
    }

    doc.pipe(res);
    doc.end();
});

module.exports = router;