import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wand2, Upload, Plus } from "lucide-react";
import FileUploader from "../components/FileUploader";
import PreviewImage from "../components/PreviewImage";
import PlatformSelect from "../components/PlatformSelect";

const CreatePost = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedClient, setSelectedClient] = useState("");
  const [caption, setCaption] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const clients = [
    { id: 1, name: "TechCorp" },
    { id: 2, name: "FitLife" },
    { id: 3, name: "FoodieDelight" }
  ];

  const handleGenerateImage = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    // Simulate AI image generation
    setTimeout(() => {
      setGeneratedImage("https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800");
      setIsGenerating(false);
    }, 3000);
  };

  const handleImageUpload = (files: FileList | File) => {
    const fileArray = files instanceof FileList ? Array.from(files) : [files];
    const newImages = fileArray.map((file: File) => ({
      id: Date.now() + Math.random(),
      url: URL.createObjectURL(file),
      file
    }));
    setUploadedImages([...uploadedImages, ...newImages]);
  };

  const handleCreatePost = () => {
    // Handle post creation logic
    console.log({
      client: selectedClient,
      caption,
      platforms: selectedPlatforms,
      images: generatedImage ? [generatedImage] : uploadedImages.map(img => img.url)
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Create Post</h1>
        <p className="text-muted-foreground">
          Generate AI content or upload your own images to create engaging posts
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Content Creation */}
        <div className="space-y-6">
          {/* AI Image Generator */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wand2 className="w-5 h-5 text-primary" />
                AI Image Generator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="prompt">Describe your image</Label>
                <Textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="A modern tech product on a sleek background with purple lighting..."
                  className="glass-surface border-border/30 resize-none"
                  rows={3}
                />
              </div>
              
              <Button 
                onClick={handleGenerateImage}
                disabled={!prompt.trim() || isGenerating}
                className="w-full btn-gradient"
              >
                {isGenerating ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                    Generating...
                  </div>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4 mr-2" />
                    Generate Image
                  </>
                )}
              </Button>

              {generatedImage && (
                <PreviewImage src={generatedImage} alt="Generated content" onRemove={() => setGeneratedImage(null)} />
              )}
            </CardContent>
          </Card>

          {/* Image Upload */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5 text-accent" />
                Upload Images
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FileUploader
                onFileSelect={handleImageUpload}
                accept="image/*"
                multiple
              />
              
              {uploadedImages.length > 0 && (
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {uploadedImages.map((image) => (
                    <PreviewImage 
                      key={image.id} 
                      src={image.url} 
                      alt="Uploaded content"
                      onRemove={() => setUploadedImages(uploadedImages.filter(img => img.id !== image.id))}
                    />
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Post Details */}
        <div className="space-y-6">
          {/* Client Selection */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Post Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Select Client</Label>
                <Select value={selectedClient} onValueChange={setSelectedClient}>
                  <SelectTrigger className="glass-surface border-border/30">
                    <SelectValue placeholder="Choose a client" />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-border/30">
                    {clients.map((client) => (
                      <SelectItem key={client.id} value={client.name}>
                        {client.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="caption">Caption</Label>
                <Textarea
                  id="caption"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Write your caption here... Use emojis to make it engaging! 🚀"
                  className="glass-surface border-border/30 resize-none"
                  rows={4}
                />
              </div>

              <div>
                <Label>Select Platforms</Label>
                <PlatformSelect
                  selectedPlatforms={selectedPlatforms}
                  onChange={setSelectedPlatforms}
                />
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-4">
            <Button 
              onClick={handleCreatePost}
              disabled={!selectedClient || !caption || selectedPlatforms.length === 0}
              className="flex-1 btn-gradient"
            >
              Create Post
            </Button>
            <Button 
              variant="outline"
              className="btn-glass"
            >
              Save Draft
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;