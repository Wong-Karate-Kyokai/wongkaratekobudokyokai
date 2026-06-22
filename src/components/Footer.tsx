//import { Instagram, Facebook } from "lucide-react"
 import { FaInstagram, FaFacebookF } from "react-icons/fa"
import "../styles/footer.css"

export default function Footer(){

return(

<footer className="footer">

<div className="footer-container">

<div className="footer-social">

<a
href="https://www.instagram.com/wongkaratekobudodojo?igsh=MXJtZXM4cXB0bW5sOQ=="
target="_blank"
rel="noreferrer"
>
<FaInstagram size={18}/>
<span>Instagram</span>
</a>

<a
href="https://www.facebook.com/share/1EU64qSSFH/?mibextid=wwXIfr"
target="_blank"
rel="noreferrer"
>
<FaFacebookF size={16}/>
<span>Facebook</span>
</a>

</div>

<div className="footer-divider"></div>

<p className="footer-copy">
© {new Date().getFullYear()} Wong Karate Kobudo Dojo
</p>

<a
href="https://naylasouzaribeiro.com.br"
target="_blank"
rel="noreferrer"
className="footer-dev"
>
Desenvolvido por naylasouzaribeiro.com.br
</a>

</div>

</footer>

)

}