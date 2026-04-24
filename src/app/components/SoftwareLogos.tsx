// Software logos using real images
import { ImageWithFallback } from './figma/ImageWithFallback';
import autocadLogo from '../../imports/image.png';
import revitLogo from '../../imports/image-1.png';
import civil3dLogo from '../../imports/image-2.png';
import robotLogo from '../../imports/image-3.png';
import msProjectLogo from '../../imports/image-4.png';
import plaxisLogo from '../../imports/image-5.png';

export const AutoCADLogo = () => (
  <div className="w-16 h-16 flex items-center justify-center">
    <ImageWithFallback
      src={autocadLogo}
      alt="AutoCAD"
      className="w-full h-full object-contain"
    />
  </div>
);

export const RevitLogo = () => (
  <div className="w-16 h-16 flex items-center justify-center">
    <ImageWithFallback
      src={revitLogo}
      alt="Revit"
      className="w-full h-full object-contain"
    />
  </div>
);

export const Civil3DLogo = () => (
  <div className="w-16 h-16 flex items-center justify-center">
    <ImageWithFallback
      src={civil3dLogo}
      alt="Civil 3D"
      className="w-full h-full object-contain"
    />
  </div>
);

export const RobotLogo = () => (
  <div className="w-16 h-16 flex items-center justify-center">
    <ImageWithFallback
      src={robotLogo}
      alt="Robot Structural Analysis"
      className="w-full h-full object-contain"
    />
  </div>
);

export const MSProjectLogo = () => (
  <div className="w-16 h-16 flex items-center justify-center">
    <ImageWithFallback
      src={msProjectLogo}
      alt="MS Project"
      className="w-full h-full object-contain"
    />
  </div>
);

export const PlaxisLogo = () => (
  <div className="w-16 h-16 flex items-center justify-center">
    <ImageWithFallback
      src={plaxisLogo}
      alt="Plaxis"
      className="w-full h-full object-contain"
    />
  </div>
);

export const SoftwareCard = ({
  Logo,
  name,
  category
}: {
  Logo: React.ComponentType;
  name: string;
  category: string;
}) => (
  <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden">
    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-300"></div>
    <div className="relative flex flex-col items-center text-center gap-4">
      <div className="transform group-hover:scale-110 transition-all duration-300 bg-white/10 p-3 rounded-xl">
        <Logo />
      </div>
      <div>
        <p className="font-bold text-white mb-1">{name}</p>
        <p className="text-sm text-blue-100/80">{category}</p>
      </div>
    </div>
  </div>
);
