import { Facebook, Instagram, Linkedin, Mail, MapPin, PhoneCall, Send } from "lucide-react"

import {cn} from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";


export const ContactSection = () => {
  
  const {toast} =useToast();
  const[isSubmitted,setSubmitted]=useState(false);

  const handleSubmit= (e)=>{
  e.preventDefault();
    setSubmitted(true);
  setTimeout(()=>{
       toast({
        title:"Message Send!",
        description:"Thank you for message. I will get back to you soon."
       });
         setSubmitted(false);
  },1500)


}
  return (
    <section id="contact" className="py-24 px-4  relative bg-secondary/30">
        <div className="container mx-auto  max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">Get In <span className="text-primary"> Touch</span></h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
           Have a project in mind? Feel free to contact me. I’d love to collaborate and bring your ideas to life!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6 justify-center">
                     <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                             <Mail className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium">EMail</h4>
                            <a href="mailto:Praveennivas8@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">praveennivas8@gmail.com</a>
                        </div>
                     </div>
                     <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                             <PhoneCall className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium">   Phone</h4>
                            <a href="tel:+918367270210" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">8367270210</a>
                        </div>
                     </div>
                     <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                             <MapPin className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium ">   Location</h4>
                            <a href="https://www.bing.com/maps?q=bapatla+district&FORM=HDRSC6&cp=15.934095%7E80.383064&lvl=10.4" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">Hyderabad, Telangana</a>
                        </div>
                     </div>
              </div>

              <div className="pt-8">
                  <h4 className="font-semibold mb-4">Connect With Me</h4>
                  <div className="flex space-x-4 justify-center">
                     <a href="https://www.linkedin.com/in/praveennivas/" target="_blank">
                      <Linkedin />
                     </a>
                      <a href="https://www.instagram.com/iam_praveen2261/" target="_blank">
                      <Instagram/>
                     </a>
                      <a href="https://www.facebook.com/share/1GLJsNYk4Z/" target="_blank">
                      <Facebook/>
                     </a>
                  </div>
              </div>
             </div>


             <div className="bg-card p-8 rounded-lg" onSubmit={handleSubmit}>
                       <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                       <form action="" className="space-y-6">
                             <div>
                              <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                              <input 
                              type="text"
                               id="name" 
                               name="name" 
                               required
                               className=" w-full px-4 py-3 rounded-md border-input border bg-background focus: outline-hidden focus: ring-2 focus:ring-primary"
                              placeholder="praveen..."
                               />
                             </div>

                               <div>
                              <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                              <input 
                              type="email"
                               id="email" 
                               name="email" 
                               required
                               className=" w-full px-4 py-3 rounded-md border-input border bg-background focus: outline-hidden focus: ring-2 focus:ring-primary"
                              placeholder="praveen223@gmail.com"
                               />
                             </div>

                               <div>
                              <label htmlFor="message" className="block text-sm font-medium mb-2 resize-none">Your Message</label>
                              <textarea
                           
                               id="message" 
                               name="message" 
                               required
                               className=" w-full px-4 py-3 rounded-md border-input border bg-background focus: outline-hidden focus: ring-2 focus:ring-primary"
                              placeholder="I'd like to talk about..."
                               />
                             </div>
                             <button 
                             type="submit"
                             disabled={isSubmitted}
                              className={cn("cosmic-button w-full flex justify-center items-center gap-2"
                              ,
                             )}>
                             {isSubmitted ? "Sending...":"Send Message"}
                                 <Send size={16}/>
                             </button>
                       </form>
             </div>

        </div>
        </div>
    </section>
  )
}
