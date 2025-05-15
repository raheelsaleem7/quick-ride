import React from 'react';
import { Button } from '../ui/button';
import { Mail } from 'lucide-react';

const EnterpriseBanner = () => {
    return (
        <div>
            <div>
                <div>
                    <h2>Partner with Quick Ride to change the way employees get to work</h2>
                </div>
                <div>
                    <Button className="" variant="default">
                        Apply Now
                        <Mail />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default EnterpriseBanner;
