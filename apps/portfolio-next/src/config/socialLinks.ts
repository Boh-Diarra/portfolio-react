import { FaGithub, FaWhatsapp, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6';
import type { IconType } from 'react-icons';

export interface SocialLink {
  href: string;
  icon: IconType;
  name: string;
}

export const socialLinks: SocialLink[] = [
  { href: 'https://github.com/Boh-Diarra', icon: FaGithub, name: 'github' },
  { href: 'https://wa.me/22392619337', icon: FaWhatsapp, name: 'whatsapp' },
  { href: 'https://www.linkedin.com/in/boh-diarra/', icon: FaLinkedinIn, name: 'linkedin' },
  { href: 'https://www.facebook.com/profile.php?id=61553842637923', icon: FaFacebookF, name: 'facebook' },
]; 