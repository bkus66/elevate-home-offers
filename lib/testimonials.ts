export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export const allTestimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    location: 'Austin, TX',
    text: "I needed to sell fast after my divorce and Elevate made it so easy. I had a cash offer in 24 hours and closed in 10 days. No stress, no hassle, no realtor drama. I was honestly shocked by how smooth the whole process was. The team was incredibly professional and kept me informed every step of the way. I would recommend them to anyone who needs to sell quickly.",
    rating: 5,
  },
  {
    name: 'James R.',
    location: 'Round Rock, TX',
    text: "The house needed a lot of work and I couldn't afford to fix it up. Elevate bought it as-is and gave me a fair price. I was worried they'd lowball me because of the condition, but their offer was genuinely reasonable and factored in what the repairs would have cost me. Couldn't be happier with how it all turned out.",
    rating: 5,
  },
  {
    name: 'Maria L.',
    location: 'Georgetown, TX',
    text: "Inherited my mom's house and had no idea what to do with it. The team was so patient and walked me through everything from probate to closing. They never made me feel rushed or pressured, and they explained every document clearly. It was a difficult time emotionally and they were genuinely compassionate. Highly recommend.",
    rating: 5,
  },
  {
    name: 'David K.',
    location: 'Cedar Park, TX',
    text: "Was behind on payments and facing foreclosure. Elevate stepped in quickly and saved my credit. They moved faster than I thought was possible and got everything done in under two weeks. If you're in a tough financial spot, these guys are the real deal. They treated me with dignity and got me out of a really scary situation.",
    rating: 5,
  },
];
