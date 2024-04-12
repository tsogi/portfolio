import "./Jptf03.css";

let students = [
    {
        imageSrc: "/images/jp_38_6/1.jpg",
        name: "აბუსერიძე გიორგი",
        figmaUrl: "https://www.figma.com/file/65J3wD94odm2fUo8PzWO7g/Landing-Page-(Community)?type=design&node-id=101-11&mode=design",
        websiteUrl: "" 
    },
    {
        imageSrc: "/images/jp_38_6/2.jpg",
        name: "ალაზოვი რაულ",
        figmaUrl: "https://www.figma.com/file/bEWyLh48E4A63T6LOXCZYb/Devpost-2.0-(Community)?type=design&node-id=1-2&mode=design",
        websiteUrl: "" 
    },
    {
        imageSrc: "/images/jp_38_6/3.jpg",
        name: "ბედენაშვილი ნოდარი",
        figmaUrl: "https://www.figma.com/file/XUt6kbvylgQV3f0fmEmPdd/Ecommerce-Web-Pages-(Free)-(Community)?type=design&node-id=0-1&mode=design",
        websiteUrl: "" 
    },
    {
        imageSrc: "/images/jp_38_6/4.png",
        name: "ბეჟუაშვილი გიორგი",
        figmaUrl: "https://www.figma.com/file/4rFfvsStZrj8rQHA5UaTVL/E-Commerce-Website-(Community)?type=design&node-id=0-1&mode=design",
        websiteUrl: "" 
    },
    {
        imageSrc: "/images/jp_38_6/5.jpg",
        name: "გაბოძე დანიელ",
        figmaUrl: "https://www.figma.com/file/4rFfvsStZrj8rQHA5UaTVL/E-Commerce-Website-(Community)?type=design&node-id=0-1&mode=design",
        websiteUrl: "" 
    },
    {
        imageSrc: "/images/jp_38_6/6.jpg",
        name: "გერაძე ზურაბი",
        figmaUrl: "https://www.figma.com/file/3ghP8rfj2zrfiuN2GlgVE0/2023-Audi-RS-e-tron%C2%AE-GT-Landing-Page-(Community)?type=design&node-id=0-1&mode=design",
        websiteUrl: "" 
    },
    {
        imageSrc: "/images/jp_38_6/7.jpg",
        name: "გიგაური გიორგი",
        figmaUrl: "https://www.figma.com/file/cR12A4QnCluY8ZKqDt6nK7/Golobe---Travel-agency-website-(Community)?type=design&node-id=108-18842&mode=design",
        websiteUrl: "" 
    },
    {
        imageSrc: "/images/jp_38_6/8.jpeg",
        name: "დაუშვილი შოთიკო",
        figmaUrl: "https://www.figma.com/file/u7aYStsbMSMOewChzbWkyh/FoodWagon-Food-Delivery-Landing-Template-by-ThemeWagon-(Community)?type=design&node-id=342-144&mode=design",
        websiteUrl: "" 
    },
    {
        imageSrc: "/images/jp_38_6/9.jpg",
        name: "თავბერიძე საბა",
        figmaUrl: "https://www.figma.com/file/lW0gHEBYv2EAWmZuBK1jJu/Free-Travel-Design-Template-(Community)?type=design&node-id=0-1&mode=design",
        websiteUrl: "" 
    },
    {
        imageSrc: "/images/jp_38_6/10.jpg",
        name: "პიტიურიშვილი სანდრო",
        figmaUrl: "https://www.figma.com/file/EQNUlaDm4Kxv6fRUCQua8Y/Agriculture-Webflow-Website-Template-(Community)?type=design&node-id=1-430&mode=design",
        websiteUrl: "" 
    },
    {
        imageSrc: "/images/jp_38_6/11.png",
        name: "ჟორჟოლიანი ლუკა",
        figmaUrl: "https://www.figma.com/file/KiwbV0gGBzOa5Pzo7KGQqe/Client-first-Template-9---Webflow-Agency-(Community)-(Community)?type=design&node-id=0-1&mode=design",
        websiteUrl: "" 
    },
    {
        imageSrc: "/images/jp_38_6/12.svg",
        name: "სვანაძე გიორგი", 
        figmaUrl: "https://www.figma.com/file/lYpu7kcPSHR3CVjpJrSo0s/Website-Event-Ticketing-(Community)?type=design&node-id=0-1&mode=design",
        websiteUrl: "" 
    },
    {
        imageSrc: "/images/jp_38_6/13.jpg",
        name: "ფირცხალაშვილი ლაშა გიორგი",
        figmaUrl: "https://www.figma.com/file/KiwbV0gGBzOa5Pzo7KGQqe/Client-first-Template-9---Webflow-Agency-(Community)-(Community)?type=design&node-id=0-1&mode=design",
        websiteUrl: "" 
    },
    {
        imageSrc: "/images/jp_38_6/14.jpg",
        name: "ძეგველიშვილი მიხეილ",
        figmaUrl: "https://www.figma.com/file/YY7ThTh5kyrtfg9Qh0kEts/DeliCook-%7C-Recipe-and-Delivery-Website-(Community)?type=design&node-id=0-1&mode=design",
        websiteUrl: "" 
    },
    {
        imageSrc: "/images/jp_38_6/15.svg",
        name: "ხარებავა გიორგი",
        figmaUrl: "https://www.figma.com/file/mNCseShKqjWL1IcnFzKwlR/Website-Template-%7C-Skydrone-(Community)?type=design&node-id=304-14049&mode=design",
        websiteUrl: "" 
    },
    {
        imageSrc: "/images/jp_38_6/16.jpeg",
        name: "ჯიბლაძე დავით",
        figmaUrl: "https://www.figma.com/file/lYpu7kcPSHR3CVjpJrSo0s/Website-Event-Ticketing-(Community)?type=design&node-id=0-1&mode=design",
        websiteUrl: "" 
    },
    {
        imageSrc: "/images/jp_38_6/17.jpg",
        name: "ჯიბუტი თამაზ",
        figmaUrl: "https://www.figma.com/file/pHsb1fRdCbx67Qbm1pAEbq/Slab-Shop---E-Commerce-(Community)?type=design&node-id=0-1&mode=design",
        websiteUrl: "" 
    },
]

function Jp_38_6(props){
    return <div className="jptf">
        <div>
            <h3>ფინალური პროექტები</h3>
            <section class="articles">
                {
                    students.map((student) => {
                        return <article class="profile">
                                    <div class="profile-image">
                                        <img src={student.imageSrc} />
                                    </div>
                                    <h2 class="profile-username">{student.name}</h2>
                                    <div class="profile-actions">
                                        <a target="_blank" href={student.figmaUrl} class="btn btn--primary">Figma</a>
                                        <a href={student.websiteUrl} target="_blank" class="btn btn--primary disabled">Website</a>
                                    </div>
                                </article>
                    })
                }
            </section>
        </div>
    </div>
}

export default Jp_38_6;