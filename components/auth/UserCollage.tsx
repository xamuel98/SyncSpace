"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';

const UserCollage = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
	const pathname = usePathname();

    const collageRef = useRef(null);

	useEffect(() => {
		const avatars = gsap.utils.toArray('.collage-avatar', collageRef.current);
        
        gsap.fromTo(avatars, { 
            opacity: 0,
            y: 20, // Initial y offset
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.2, // Delay between each avatar animation
            ease: 'power3.inOut',
            duration: 1, // Duration of each animation
        });

    }, [pathname]);

    return (
        <div className="user-collage" ref={collageRef}>
            {/* Row 1 */}
            <div className="collage-avatar">
                <Image 
                    src="/images/avatar-1.png" 
                    width={130}
                    height={130}
                    alt="Avatar 1"
                />
            </div>
            <div className="collage-avatar"></div>
            <div className="collage-avatar">
                <Image 
                    src="/images/avatar-2.png" 
                    width={130}
                    height={130}
                    alt="Avatar 2"
                />
            </div>
            <div className="collage-avatar">
                <Image 
                    src="/images/avatar-3.png" 
                    width={130}
                    height={130}
                    alt="Avatar 3"
                />
            </div>
            <div className="collage-avatar">
                <Image 
                    src="/images/avatar-4.png" 
                    width={130}
                    height={130}
                    alt="Avatar 4"
                />
            </div>

            {/* Row 2 */}
            <div className="collage-avatar"></div>
            <div className="collage-avatar">
                <Image 
                    src="/images/avatar-5.png" 
                    width={130}
                    height={130}
                    alt="Avatar 5"
                />
            </div>
            <div className="collage-avatar"></div>
            <div className="collage-avatar">
                <Image 
                    src="/images/avatar-6.png" 
                    width={130}
                    height={130}
                    alt="Avatar 6"
                />
            </div>
            <div className="collage-avatar"></div>

            {/* Row 3 */}
            <div className="collage-avatar"></div>
            <div className="collage-avatar"></div>
            <div className="collage-avatar">
                <Image 
                    src="/images/avatar-8.png" 
                    width={130}
                    height={130}
                    alt="Avatar 8"
                />
            </div>
            <div className="collage-avatar"></div>
            <div className="collage-avatar">
                <Image 
                    src="/images/avatar-9.png" 
                    width={130}
                    height={130}
                    alt="Avatar 9"
                />
            </div>

            {/* Row 4 */}
            <div className="collage-avatar">
                <Image 
                    src="/images/avatar-10.png" 
                    width={130}
                    height={130}
                    alt="Avatar 10"
                />
            </div>
            <div className="collage-avatar">
                <Image 
                    src="/images/avatar-11.png" 
                    width={130}
                    height={130}
                    alt="Avatar 11"
                />
            </div>
            <div className="collage-avatar"></div>
            <div className="collage-avatar">
                <Image 
                    src="/images/avatar-12.png" 
                    width={130}
                    height={130}
                    alt="Avatar 12"
                />
            </div>
            <div className="collage-avatar">
                <Image 
                    src="/images/avatar-13.png" 
                    width={130}
                    height={130}
                    alt="Avatar 13"
                />
            </div>
        </div>
    )
}

export default UserCollage