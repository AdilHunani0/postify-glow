import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const PlatformSelect = ({ selectedPlatforms, onChange }) => {
  const platforms = [
    {
      id: "instagram",
      name: "Instagram",
      color: "bg-pink-500/20 text-pink-300 border-pink-500/30",
      icon: "📷"
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      color: "bg-green-500/20 text-green-300 border-green-500/30",
      icon: "📱"
    },
    {
      id: "telegram",
      name: "Telegram",
      color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      icon: "✈️"
    },
    {
      id: "email",
      name: "Email",
      color: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      icon: "📧"
    }
  ];

  const togglePlatform = (platformName) => {
    if (selectedPlatforms.includes(platformName)) {
      onChange(selectedPlatforms.filter(p => p !== platformName));
    } else {
      onChange([...selectedPlatforms, platformName]);
    }
  };

  const isSelected = (platformName) => selectedPlatforms.includes(platformName);

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        {platforms.map((platform) => (
          <Card
            key={platform.id}
            className={`cursor-pointer transition-smooth ${
              isSelected(platform.name)
                ? "glass-card border-primary/50 glow-primary"
                : "glass-surface hover:bg-glass/80"
            }`}
            onClick={() => togglePlatform(platform.name)}
          >
            <CardContent className="p-4 text-center">
              <div className="text-2xl mb-2">{platform.icon}</div>
              <p className="font-medium text-sm">{platform.name}</p>
              {isSelected(platform.name) && (
                <Badge variant="outline" className="mt-2 bg-primary/20 text-primary border-primary/30">
                  Selected
                </Badge>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      
      {selectedPlatforms.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="text-sm text-muted-foreground">Selected:</span>
          {selectedPlatforms.map((platform) => {
            const platformData = platforms.find(p => p.name === platform);
            return (
              <Badge 
                key={platform}
                variant="outline" 
                className={platformData?.color}
              >
                {platformData?.icon} {platform}
              </Badge>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PlatformSelect;