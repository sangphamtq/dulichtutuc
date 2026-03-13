import Button from '../components/Button';
import { Home } from 'lucide-react';

export default function NotFound() {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                {/* Content */}
                <div className="grow text-center my-20 flex flex-col justify-center items-center">
                    <h1 className="text-9xl font-semibold mb-8">404</h1>
                    <p className="text-3xl mb-6">Ôi! Không tìm thấy trang này</p>
                    <Button href="/" icon={Home}>
                        Quay lại trang chủ
                    </Button>
                </div>

                {/* Footer */}
            </div>
        </>
    );
}
