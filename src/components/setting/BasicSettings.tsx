// components/PromotionForm.tsx
'use client';

import FeesForm from "./FeesForm";
import PromotionForm from "./PromotionForm";



export default function BasicSettings() {
  

  return (
    <div className="">
        <FeesForm/>
        <PromotionForm
            title="Referral Promotion Settings"
            defaultValues={{
                discount: '10',
                promoTitle: 'Referral Promo',
                maxUsagePerStudent: '1',
                maxDurationDays: '3',
                details: 'Referral Promo Details',
                maxStudentsPerCode: '1',
                terms: 'Referral Promo Terms',
            }}
            />
            <PromotionForm
                title="Registration Promotion Settings"
                defaultValues={{
                    discount: '10',
                    promoTitle: 'Register Promo',
                    maxUsagePerStudent: '1',
                    maxDurationDays: '3',
                    details: 'Registration Promo Details',
                    maxStudentsPerCode: '1',
                    terms: 'Registration Promo Terms',
                }}
                />
    </div>
    
  );
}
