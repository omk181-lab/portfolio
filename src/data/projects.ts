import type { Project } from './types'
import projectThumbnail from '../../moving_object_seg/project_thumbnail.gif'
import fernVideo from '../../Splatting_the_unsplattable/novel_views_20fps_fern.mp4'
import hornsVideo from '../../Splatting_the_unsplattable/novel_views_20fps_horns.mp4'
import orchidsVideo from '../../Splatting_the_unsplattable/novel_views_20fps_orchids.mp4'
import trexVideo from '../../Splatting_the_unsplattable/novel_views_20fps_trex.mp4'
import viewTranslationVideo from '../../view_translation/view_translation_thumbnail.mp4'
import generalizableNeRFVideo from '../../generalizable_neural_radiance_field/generalizable_neural_radiance.mp4'
import roboticsVideoOne from '../../robotics/rpbotics_thumbnail1.mp4'
import roboticsVideoTwo from '../../robotics/rpbotics_thumbnail2.mp4'
import roboticsVideoThree from '../../robotics/rpbotics_thumbnail3_h264.mp4'

export const projects: Project[] = [
  {
    id: '3dgs-low-resolution',
    title: 'Splatting the Unsplattable: 3D Gaussian Splatting from Low-Resolution Images',
    category: '3D Reconstruction / Neural Rendering / Super-Resolution',
    summary: 'An experimental pipeline for making 3D Gaussian Splatting work when original image inputs are too low-resolution for reliable camera-pose estimation.',
    videos: [fernVideo, hornsVideo, orchidsVideo, trexVideo],
    technologies: ['3D Gaussian Splatting', 'COLMAP', 'RealBasicVSR', 'SwinIR', 'Stable Diffusion X4', 'HRDS'],
    contribution: 'Uses enhanced images for pose estimation while training 3DGS with the original low-resolution images.',
    details: ['LLFF at 100x100 resolution', 'Mip-NeRF 360 at 150x100 resolution', 'SDx4 + 3DGS: PSNR 32.96 on LLFF', 'RealBasicVSR + 3DGS: PSNR 32.49 on Mip-NeRF 360'],
    observations: ['On LLFF scenes, SDx4 produced sharp, coherent 3D geometry.', 'On complex tractor and garden scenes from Mip-NeRF 360, RealBasicVSR was perceptually sharper and closer to ground truth than SDx4 and SwinIR.', 'The project attributes the Mip-NeRF 360 advantage to the temporal and spatial consistency of video upscalers.'],
    externalUrl: 'https://rajolu-vinay77.github.io/3DGS-Project-Blog/',
    codeUrl: 'https://github.com/omkar55-bot/Improving-3D-Gaussian-Splatting-for-Low-Resolution-Image-Inputs',
    accent: 'cyan',
    featured: true,
  },
  {
    id: 'moving-object-segmentation',
    title: 'Moving Object Segmentation',
    category: 'Computer Vision / Video Understanding / Segmentation',
    summary: 'A computer vision project focused on identifying and segmenting moving objects in video sequences.',
    thumbnail: projectThumbnail,
    technologies: ['Computer vision', 'Video sequences', 'Segmentation'],
    externalUrl: 'https://medium.com/@omkarmayekar555/moving-object-segmentation-2a42ab894651',
    accent: 'green',
  },
  {
    id: 'view-translation',
    title: 'View Translation: Geometry-Guided Latent Diffusion for Cross-View Image Synthesis',
    category: 'View Synthesis / Diffusion Models / Geometry',
    summary: 'An end-to-end research project developing a geometry-guided latent diffusion framework for synthesizing cross-view images of ground vehicles.',
    video: viewTranslationVideo,
    videoAspectRatio: '1836 / 690',
    paperUrl: 'https://saemobilus.sae.org/papers/view-translation-geometry-guided-latent-diffusion-cross-view-image-synthesis-ground-vehicles-2026-01-7501',
    technologies: ['Latent diffusion', 'Geometric constraints', 'High-resolution synthesis'],
    contribution: 'Authored and led the research from ideation through manuscript completion, including publication-quality architecture figures.',
    accent: 'violet',
  },
  {
    id: 'nerf-super-resolution',
    title: 'Generalizable NeRF Super-Resolution',
    category: 'Neural Rendering / 3D Reconstruction / Benchmarking',
    summary: 'An experimental study comparing neural rendering and 3D reconstruction methods for super-resolution across real-world and synthetic scenes.',
    video: generalizableNeRFVideo,
    videoAspectRatio: '2446 / 1292',
    paperUrl: 'https://arxiv.org/abs/2603.20128',
    technologies: ['NeRF-SR', '3DGS', 'Instant-NGP', 'TensoRF', 'GeFu', 'GDB-NeRF'],
    contribution: 'Evaluates reconstruction quality, super-resolution performance, and cross-scene generalization.',
    accent: 'cyan',
  },
  {
    id: 'collision-detection',
    title: '3D Collision Detection for Robot Manipulation',
    category: 'Robotics / 3D Scene Understanding / Robot Learning',
    summary: 'An applied robotics project exploring spatial perception and collision-aware manipulation with real-world robot arms and vision-language-action policies.',
    videos: [roboticsVideoOne, roboticsVideoTwo, roboticsVideoThree],
    videoLayout: 'two-plus-one',
    videoAspectRatio: '16 / 15',
    huggingFaceUrl: 'https://huggingface.co/omkarmayekar555',
    presentationUrl: 'https://onedrive.live.com/:p:/g/personal/6b2ca882f0a8d204/IQAhLpAqjEDBTp5A1dQ8yeJSAR3vM27UWRc7jyz8hIn1KnQ?rtime=GkIMISU030g&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3AvYy82YjJjYTg4MmYwYThkMjA0L0lRQWhMcEFxakVEQlRwNUExZFE4eWVKU0FSM3ZNMjdVV1JjN2p5ejhoSW4xS25RP2U9OXhWd3Br',
    technologies: ['ACT', 'SmolVLA', 'GrootN1.5', 'VGGT', 'Depth Anything 3', 'SO101'],
    contribution: 'Investigates spatial context and collision-aware action planning while implementing multiple policies on a real SO101 robot arm.',
    accent: 'green',
  },
]