import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

export async function GET(request: Request) {
  try {
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
      console.warn('Cloudinary API credentials missing in process.env');
      return NextResponse.json({
        configured: false,
        message: 'Cloudinary environment variables not set.',
        items: [],
      });
    }

    cloudinary.config({
      cloud_name: cloudName,
      api_key: apiKey,
      api_secret: apiSecret,
      secure: true,
    });

    const { searchParams } = new URL(request.url);
    const track = searchParams.get('track');

    let prefix = 'gallery/Confluence 1.0';
    if (track === 'community') {
      prefix = 'gallery/Confluence 1.0 (Nov 7-8 2025)/Community Track';
    } else if (track === 'dev') {
      prefix = 'gallery/Confluence 1.0 (Nov 7-8 2025)/Dev Track';
    }

    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix,
      max_results: 500,
    });

    const items = (result.resources || []).map((resource: { secure_url: string; public_id: string }) => {
      const publicId = resource.public_id;
      const isDevTrack = publicId.includes('Dev Track');
      const isCommunityTrack = publicId.includes('Community Track');

      let trackName = 'all';
      if (isDevTrack) trackName = 'dev';
      if (isCommunityTrack) trackName = 'community';

      const rawName = publicId.split('/').pop() || 'Confluence 2025';
      const cleanName = rawName.replace(/[-_]/g, ' ').replace(/\.\w+$/, '');

      return {
        image: resource.secure_url,
        text: cleanName,
        track: trackName,
        publicId: resource.public_id,
      };
    });

    return NextResponse.json({
      configured: true,
      items,
      count: items.length,
    });
  } catch (error) {
    console.error('Error fetching Cloudinary images:', error);
    return NextResponse.json(
      { configured: false, error: 'Failed to fetch gallery images', items: [] },
      { status: 500 }
    );
  }
}
