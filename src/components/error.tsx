import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export function Error({ text, subText, Icon, color }: { text: string; subText: string; Icon: LucideIcon; color: string }) {
	return (
		<div className="w-full flex flex-col items-center justify-center min-h-[400px] text-center p-4">
			<Icon className={cn('w-16 h-16 mb-4', color)} />
			<h2 className="text-xl font-semibold text-gray-700 mb-2">{text}</h2>
			<p className="text-gray-500">{subText}</p>
		</div>
	);
}
