import './AppFooter.css';
export default function AppFooter({year, website, company}){
    return (
        <p className="app-footer">&copy; {year} - All rights reserved <a href={website}> {company} </a> </p>
    );
}