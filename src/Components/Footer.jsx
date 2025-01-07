import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-blue-950 text-white py-6'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col sm:flex-row justify-between items-center'>
          {/* Left Section */}
          <div className='mb-4 sm:mb-0 text-center sm:text-left'>
            <h1 className='text-xl font-bold'>RSDM</h1>
            <p className='text-sm text-gray-400'>
              © {new Date().getFullYear()} My Company. All Rights Reserved.
            </p>
          </div>
          {/* Center Section */}
          <div className='flex space-x-4'>
            <Link
              href='#'
              className='text-gray-400 hover:text-white transition'
              aria-label='Facebook'
            >
              Home
            </Link>
            <Link
              href='#'
              className='text-gray-400 hover:text-white transition'
              aria-label='Twitter'
            >
              Courses
            </Link>
            <Link
              href='#'
              className='text-gray-400 hover:text-white transition'
              aria-label='About'
            >
              About us
            </Link>
            <Link
              href='#'
              className='text-gray-400 hover:text-white transition'
              aria-label='Contact'
            >
              Contact us
            </Link>
          </div>

          {/* Right Section */}
          <div className='text-center sm:text-right'>
            <a href='#' className='text-gray-400 hover:text-white transition'>
              Privacy Policy
            </a>
            <span className='mx-2'>|</span>
            <a href='#' className='text-gray-400 hover:text-white transition'>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// import { Clock3, MapPin, Phone } from 'lucide-react';
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className='bg-blue-950 text-white py-6 '>
//       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
//         <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
//           {/* Head Office Section */}
//           <div className='space-y-7'>
//             <h2 className='text-lg md:text-3xl font-semibold'>
//               Head Office: FC Road, Pune
//             </h2>
//             <p>PIIDM - Digital Marketing Courses In Pune, Training Institute</p>
//             <div className='flex items-center gap-2'>
//               <p className='text-2xl'>
//                 <MapPin />
//               </p>
//               <div>
//                 Address: Shivank Building, Apte Road, 404, Fergusson College Rd,
//                 Deccan Gymkhana, Pune, Maharashtra 411004
//               </div>
//             </div>
//             <div className='flex items-center gap-2'>
//               <Clock3 />
//               <div>
//                 <p>Mon To Sun 8:00 AM – 08:00 PM</p>
//                 <p>Visiting Hours / Enquiry</p>
//               </div>
//             </div>
//             <div className='flex items-center gap-2'>
//               <Phone />
//               <div>
//                 <p>+91 9607355959</p>
//                 <p>+91 8552077668</p>
//               </div>
//             </div>
//             <iframe
//               src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14767.858607910088!2d70.7581320871582!3d22.2793288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395927d878f13b95%3A0x2dc90395b210b8d9!2sReliance%20Mall!5e0!3m2!1sen!2sin!4v1732599067442!5m2!1sen!2sin'
//               width='100%'
//               height='200'
//               style={{ border: 0 }}
//               allowFullScreen=''
//               loading='lazy'
//               className='pt-2'
//               referrerPolicy='no-referrer-when-downgrade'
//             ></iframe>
//           </div>

//           {/* Pimple Saudagar Branch Section */}
//           <div className='space-y-6'>
//             <h2 className='text-lg md:text-3xl font-semibold'>
//               Pimple Saudagar (PCMC) Branch
//             </h2>
//             <p>
//               PIIDM - Digital Marketing Course In Pimpri Chinchwad (PCMC),
//               Pimple Saudagar
//             </p>
//             <div className='flex items-center gap-2'>
//               <p className='text-xl'>
//                 <MapPin />
//               </p>
//               Address: Office 401, 4th floor, opposite to Dutt Mandir, Vision 9
//               Mall, Kunal Icon Rd, Pimple Saudagar, Pune, Pimpri-Chinchwad,
//               Maharashtra 411027
//             </div>
//             <div className='flex items-center gap-2'>
//               <Clock3 />
//               <div>
//                 <p>Mon To Sun 8:00 AM – 08:00 PM</p>
//                 <p>Visiting Hours / Enquiry</p>
//               </div>
//             </div>
//             <div className='flex items-center gap-2'>
//               <Phone />
//               <div>
//                 <p>+91 9607355959</p>
//                 <p>+91 8552077668</p>
//               </div>
//             </div>
//             <iframe
//               src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14767.858607910088!2d70.7581320871582!3d22.2793288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395927d878f13b95%3A0x2dc90395b210b8d9!2sReliance%20Mall!5e0!3m2!1sen!2sin!4v1732599067442!5m2!1sen!2sin'
//               width='100%'
//               height='200'
//               style={{ border: 0 }}
//               allowFullScreen=''
//               loading='lazy'
//               referrerPolicy='no-referrer-when-downgrade'
//             ></iframe>
//           </div>

//           {/* Links Section */}
//           <div>
//             <h2 className='text-lg font-bold'>Quick Links</h2>
//             <ul>
//               <li>
//                 <Link
//                   to='/'
//                   className='text-gray-400 hover:text-white transition'
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to='/courses'
//                   className='text-gray-400 hover:text-white transition'
//                 >
//                   Courses
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to='/placements'
//                   className='text-gray-400 hover:text-white transition'
//                 >
//                   Placements
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to='/about'
//                   className='text-gray-400 hover:text-white transition'
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to='/contact'
//                   className='text-gray-400 hover:text-white transition'
//                 >
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//             {/* <h2 className='text-lg font-bold mt-4'>Useful Links</h2>
//             <ul>
//               <li>
//                 <Link
//                   to='/our-placement'
//                   className='text-gray-400 hover:text-white transition'
//                 >
//                   Our Placement
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to='/students-feedback'
//                   className='text-gray-400 hover:text-white transition'
//                 >
//                   Students Feedback
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to='/blog'
//                   className='text-gray-400 hover:text-white transition'
//                 >
//                   Blog
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to='/about-us'
//                   className='text-gray-400 hover:text-white transition'
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to='/become-placement-partner'
//                   className='text-gray-400 hover:text-white transition'
//                 >
//                   Become Our Placement Partner
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to='/privacy-policy'
//                   className='text-gray-400 hover:text-white transition'
//                 >
//                   Privacy Policy
//                 </Link>
//               </li>
//             </ul> */}
//           </div>
//         </div>
//         <div className='mt-4 text-center'>
//           <p>© {new Date().getFullYear()} Pashium. Made with ❤️ in India.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
