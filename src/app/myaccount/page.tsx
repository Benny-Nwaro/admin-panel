"use client"
import React from 'react';
import MainWrapper from '@/components/MainWarpper';
import ProfileCard from '@/components/profile/ProfileCard';
import IDCard from '@/components/profile/IDCard';
import Certifications from '@/components/profile/Certifications';
import Address from '@/components/profile/Address';


const MyAccount: React.FC = () => {
    const certifications = [
        {
          title:
            "Is incentivize believe synergy illustration look finish boy viral cadence. Involved.",
          issuer: "Google",
          issueDate: "July 2023",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8xY4DKNo4gP9J31HWzwKthKRcmF4E_x-Q_A&s",
        },
        {
          title:
            "Is incentivize believe synergy illustration look finish boy viral cadence. Involved.",
          issuer: "Google",
          issueDate: "July 2023",
          image:
            "https://design-assets.adobeprojectm.com/content/download/express/public/urn:aaid:sc:VA6C2:f1557bf7-d17d-5c9f-aae5-54d8434675cb/component?assetType=TEMPLATE&etag=d1a5e4bc1f734d11ac72f733e5bf8e8f&revision=a9124052-e92c-4ca0-bd81-743039f1f4d7&component_id=0b54ff08-e524-430b-a9ec-ff82991f1422",
        },
      ];
    return (
        <MainWrapper>
            <div className='flex flex-row space-x-5 mt-16'>
                <div className='flex flex-col'>
                    <ProfileCard
                        name="Bekwa Undie"
                        email="undiebekwa@gmail.com"
                        gender="Male"
                        dateOfBirth="1990-09-14"
                        classCategory="Music"
                        verificationStatus={true}
                        profileImage="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" // Replace with the actual image URL
                        />
                    <IDCard
                        idType="Student ID"
                        cardImage="https://marketplace.canva.com/EAFrIMMzuCw/1/0/1600w/canva-white-and-green-geometric-student-id-card-XDps5jMb-Y8.jpg" // Replace with the actual image
                        licenseNumber="85301273229"
                        issueDate="12/23"
                        expDate="11/24"
                    />
                </div>
                <div className='flex flex-col'>
                    <Address />
                    <Certifications certifications={certifications} />
                </div>  
            </div>  
    </MainWrapper>   
    );
};
export default MyAccount;